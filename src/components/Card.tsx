import grainImage from "@/assets/images/grain.jpg";
import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export const Card = ({ children, className, style, ...other }: ComponentPropsWithoutRef<"div">) => {
    return (
        <div
            className={twMerge(
                "bg-gray-900/40 rounded-3xl z-0 overflow-hidden relative backdrop-blur-xl border border-white/10 p-6",
                "after:content-[''] after:absolute after:inset-0 after:rounded-3xl after:ring-1 after:ring-inset after:ring-white/20 after:pointer-events-none",
                className
            )}
            style={style}
            {...other}>
            {/* Grain texture for a premium tactile feel */}
            <div
                className="absolute inset-0 -z-10 opacity-[0.03] mix-blend-overlay"
                style={{
                    backgroundImage: `url(${grainImage.src})`,
                }}></div>
            
            {/* Subtle Corner Glows */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.1),transparent_40%)]"></div>
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.15),transparent_40%)]"></div>
            
            {children}
        </div>
    );
};
