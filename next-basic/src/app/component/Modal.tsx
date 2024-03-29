"use client";
import {useSearchParams, usePathname} from "next/navigation";
import Link from "next/link";

export default function Modal({title, children}){
    const searchParams = useSearchParams();
    const modal = searchParams.get("modal");
    const pathname = usePathname();

    return (
        <>
            {modal && <dialog >
                    <div>
                        <div>
                            <div>
                                <h3>{title}</h3>
                            </div>
                            <div>{children}</div>
                            <Link href={pathname}>
                                <button type="button">Close Modal</button>
                            </Link>
                        </div>
                    </div>
                </dialog>
            }
        </>
    );
}