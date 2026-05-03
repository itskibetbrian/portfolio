import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { portfolioProjects } from "../../profile.config";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export const ProjectsSection = ({ id }: { id: string }) => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Close expanded card on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (expandedIndex !== null) {
                setExpandedIndex(null);
            }
        };

        if (expandedIndex !== null) {
            window.addEventListener("scroll", handleScroll, { passive: true });
        }

        return () => window.removeEventListener("scroll", handleScroll);
    }, [expandedIndex]);

    return (
        <section className="pb-16 lg:py-24" id={id}>
            <div className="container">
                <SectionHeader
                    heading1="Real-world Results"
                    heading2="Featured Projects"
                    paragraph="From backend logic to polished UI — here’s how I bring full-stack ideas to life."
                />
                <div className="flex flex-col mt-10 md:mt-20">
                    {portfolioProjects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                            animate={{
                                scale: expandedIndex === index ? 1.02 : 1,
                                zIndex: expandedIndex === index ? 50 : 10 + index,
                            }}
                            className="sticky cursor-pointer transition-shadow duration-300 mt-12 md:mt-16 lg:mt-20 first:mt-0"
                            style={{
                                top: `calc(64px + ${index * (isMobile ? 20 : 40)}px)`,
                                boxShadow: expandedIndex === index ? "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" : "none",
                            }}>
                            <Card className="px-8 pt-8 pb-12 md:pt-12 md:px-10 lg:px-20 lg:pt-16">
                                <div className="flex flex-col">
                                    <div className="lg:pb-8">
                                        <div className="inline-flex gap-2 uppercase font-bold bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text tracking-widest md:tracking-normal text-sm md:text-base">
                                            <span>{project.company}</span>
                                            <span>&bull;</span>
                                            <span>{project.year}</span>
                                        </div>
                                        <h3 className="font-serif text-2xl md:text-4xl lg:max-w-sm mt-2 md:mt-5">
                                            {project.title}
                                        </h3>
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {project.tags?.map((tag: string) => (
                                                <span
                                                    key={tag}
                                                    className="px-2 py-1 text-[10px] md:text-xs font-semibold tracking-wider uppercase text-emerald-300/80 border border-emerald-300/20 rounded-lg bg-emerald-300/5">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <ul className="mt-6 flex flex-col gap-4">
                                            {project.results.map((result) => (
                                                <li
                                                    key={result.title}
                                                    className="inline-flex gap-3 text-white/60 font-light text-sm md:text-base leading-relaxed">
                                                    <CheckIcon className="size-5 md:size-6 text-emerald-300/50 shrink-0" />
                                                    <span>{result.title}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <AnimatePresence>
                                            {expandedIndex === index && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                                    animate={{ opacity: 1, height: "auto", marginTop: 32 }}
                                                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                                    className="relative overflow-hidden rounded-2xl border border-white/10">
                                                    <Image
                                                        src={project.image}
                                                        alt={project.title}
                                                        width={1200}
                                                        height={675}
                                                        className="w-full h-auto object-cover"
                                                    />
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        <div className="flex flex-col md:flex-row gap-4 mt-8">
                                            <a href={project.link} target="_blank" className="w-full md:w-auto">
                                                <button className="bg-white text-gray-950 h-12 rounded-xl w-full md:px-6 font-semibold inline-flex items-center justify-center gap-2 hover:bg-gray-100 transition duration-300">
                                                    <span>{project.linkText}</span>
                                                    <ArrowUpRightIcon className="size-5" />
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                    {/* Large spacer to ensure all sticky cards can settle at the top without being pushed by the container end */}
                    <div className="h-[60vh] md:h-[80vh] pointer-events-none" />
                </div>
            </div>
        </section>
    );
};
