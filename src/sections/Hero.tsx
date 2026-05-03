import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import { contactSectionId, projectsSectionId } from "./constants";
import { motion } from "framer-motion";

export const HeroSection = ({ id }: { id: string }) => {
    return (
        <section className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip" id={id}>
            <div
                className="absolute inset-0"
                style={{
                    maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
                }}>
                <div
                    className="absolute inset-0 -z-30 opacity-5"
                    style={{
                        backgroundImage: `url(${grainImage.src})`,
                    }}></div>
                <div className="size-[620px] hero-ring"></div>
                <div className="size-[820px] hero-ring"></div>
                <div className="size-[1020px] hero-ring"></div>
                <div className="size-[1220px] hero-ring"></div>
                <HeroOrbit
                    sizeInPx={430}
                    rotationInDeg={-14}
                    shouldOrbit
                    orbitDuration="30s"
                    shouldSpin
                    spinDuration="3s">
                    <SparkleIcon className="size-8 text-emerald-300/20" />
                </HeroOrbit>
                <HeroOrbit
                    sizeInPx={440}
                    rotationInDeg={79}
                    shouldOrbit
                    orbitDuration="32s"
                    shouldSpin
                    spinDuration="3s">
                    <SparkleIcon className="size-5 text-emerald-300/20" />
                </HeroOrbit>
                <HeroOrbit sizeInPx={520} rotationInDeg={-41} shouldOrbit orbitDuration="34s">
                    <div className="size-2 rounded-full bg-emerald-300/15" />
                </HeroOrbit>
                <HeroOrbit
                    sizeInPx={530}
                    rotationInDeg={178}
                    shouldOrbit
                    orbitDuration="36s"
                    shouldSpin
                    spinDuration="3s">
                    <SparkleIcon className="size-12 text-emerald-300/20" />
                </HeroOrbit>
                <HeroOrbit
                    sizeInPx={550}
                    rotationInDeg={20}
                    shouldOrbit
                    orbitDuration="38s"
                    shouldSpin
                    spinDuration="6s">
                    <StarIcon className="size-12 text-emerald-300" />
                </HeroOrbit>
                <HeroOrbit
                    sizeInPx={590}
                    rotationInDeg={98}
                    shouldOrbit
                    orbitDuration="40s"
                    shouldSpin
                    spinDuration="6s">
                    <StarIcon className="size-8 text-emerald-300" />
                </HeroOrbit>
                <HeroOrbit
                    sizeInPx={710}
                    rotationInDeg={144}
                    shouldOrbit
                    orbitDuration="42s"
                    shouldSpin
                    spinDuration="3s">
                    <SparkleIcon className="size-14 text-emerald-300/20" />
                </HeroOrbit>
                <HeroOrbit sizeInPx={720} rotationInDeg={85} shouldOrbit orbitDuration="44s">
                    <div className="size-3 rounded-full bg-emerald-300/15" />
                </HeroOrbit>
                <HeroOrbit sizeInPx={650} rotationInDeg={-5} shouldOrbit orbitDuration="46s">
                    <div className="size-2 rounded-full bg-emerald-300/15" />
                </HeroOrbit>
                <HeroOrbit
                    sizeInPx={800}
                    rotationInDeg={-72}
                    shouldOrbit
                    orbitDuration="48s"
                    shouldSpin
                    spinDuration="6s">
                    <StarIcon className="size-28 text-emerald-300" />
                </HeroOrbit>
            </div>
            <div className="container relative z-10">
                <div className="flex flex-col justify-center items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}>
                        <Image src={memojiImage} className="size-[100px]" alt="Person peeking from behind laptop" />
                    </motion.div>
                    <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-3.5">
                        <div className="bg-green-500 size-2.5 rounded-full relative z-0">
                            <div className="absolute inset-0 bg-green-500 rounded-full animate-ping -z-10"></div>
                        </div>
                        <div className="text-sm font-medium">Available for new projects</div>
                    </div>
                </div>
                <div className="max-w-lg mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
                        Kibet Brian
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-4 text-center text-white/80 tracking-wide md:text-lg leading-relaxed">
                        I specialize in building scalable, production-ready applications that ship, scale, and solve complex business challenges.
                    </motion.p>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
                    <a href={"#" + projectsSectionId}>
                        <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:bg-white/5 transition duration-300">
                            <span className="font-semibold">Explore My Work</span>
                            <ArrowDown className="size-4" />
                        </button>
                    </a>
                    <a href={"#" + contactSectionId}>
                        <button className="inline-flex items-center gap-2 px-6 h-12 border border-white text-gray-900 bg-white rounded-xl hover:bg-gray-100 transition duration-300">
                            <span className="font-semibold">Book a Call</span>
                        </button>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};
