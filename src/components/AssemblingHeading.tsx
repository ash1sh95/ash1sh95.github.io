import { Fragment } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';

export interface AssemblingHeadingSegment {
    text: string;
    className?: string;
}

interface AssemblingHeadingProps {
    /** The complete heading, exposed to assistive technology as one label. */
    text: string;
    /** Optional styled text segments; their combined text should match `text`. */
    segments?: AssemblingHeadingSegment[];
    className?: string;
    ruleClassName?: string;
    showRule?: boolean;
}

const letterVariants: Variants = {
    hidden: {
        opacity: 0,
        y: '0.14em',
        filter: 'blur(7px)',
    },
    visible: (step: { index: number; delay: number }) => ({
        opacity: 1,
        y: '0em',
        filter: 'blur(0px)',
        transition: {
            delay: step.index * step.delay,
            duration: 0.32,
            ease: 'easeOut',
        },
    }),
};

const ruleVariants: Variants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: (delay: number) => ({
        opacity: 1,
        scaleX: 1,
        transition: {
            delay,
            duration: 0.45,
            ease: 'easeOut',
        },
    }),
};

/**
 * A one-time, per-letter heading reveal. Only transform-like properties,
 * opacity, and filter animate, so the heading reserves its final layout from
 * the first render. Reduced-motion users receive the static heading at once.
 */
const AssemblingHeading = ({
    text,
    segments,
    className = '',
    ruleClassName = '',
    showRule = true,
}: AssemblingHeadingProps) => {
    const reduceMotion = useReducedMotion();
    const renderedSegments = segments ?? [{ text }];
    const characterCount = renderedSegments.reduce(
        (count, segment) => count + Array.from(segment.text.replace(/\s/g, '')).length,
        0,
    );
    const letterDelay = characterCount > 1
        ? Math.min(0.024, 0.28 / (characterCount - 1))
        : 0;
    const ruleDelay = characterCount * letterDelay + 0.08;

    if (reduceMotion) {
        return (
            <h2 aria-label={text} className={className}>
                <span className="relative inline-block">
                    <span aria-hidden="true">
                        {renderedSegments.map((segment, segmentIndex) => (
                            <span key={segmentIndex} className={segment.className}>{segment.text}</span>
                        ))}
                    </span>
                    {showRule && (
                        <span
                            aria-hidden="true"
                            className={`absolute left-0 -bottom-2 h-[2px] w-full origin-left bg-burgundy-500 ${ruleClassName}`}
                        />
                    )}
                </span>
            </h2>
        );
    }

    let characterIndex = 0;

    return (
        <motion.h2
            aria-label={text}
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '0px 0px 60px 0px' }}
        >
            <span className="relative inline-block">
                <span aria-hidden="true">
                    {renderedSegments.map((segment, segmentIndex) => (
                        <Fragment key={segmentIndex}>
                            {segment.text.split(/(\s+)/).map((token, tokenIndex) => {
                                if (!token) return null;
                                if (/^\s+$/.test(token)) {
                                    return <Fragment key={`${segmentIndex}-${tokenIndex}`}>{token}</Fragment>;
                                }

                                return (
                                    <span
                                        key={`${segmentIndex}-${tokenIndex}`}
                                        className={`inline-block whitespace-nowrap ${segment.className ?? ''}`}
                                    >
                                        {Array.from(token).map((character) => {
                                            const step = { index: characterIndex, delay: letterDelay };
                                            characterIndex += 1;
                                            return (
                                                <motion.span
                                                    key={`${segmentIndex}-${tokenIndex}-${step.index}`}
                                                    custom={step}
                                                    variants={letterVariants}
                                                    className="inline-block will-change-[opacity,filter,transform]"
                                                >
                                                    {character}
                                                </motion.span>
                                            );
                                        })}
                                    </span>
                                );
                            })}
                        </Fragment>
                    ))}
                </span>
                {showRule && (
                    <motion.span
                        aria-hidden="true"
                        custom={ruleDelay}
                        variants={ruleVariants}
                        className={`absolute left-0 -bottom-2 h-[2px] w-full origin-left bg-burgundy-500 ${ruleClassName}`}
                    />
                )}
            </span>
        </motion.h2>
    );
};

export default AssemblingHeading;
