"use client";
import {useSearchParams, usePathname} from "next/navigation";
import Link from "next/link";

export default function Modal(){
    const searchParams = useSearchParams();
    const modal = searchParams.get("modal");
    const pathname = usePathname();

    return (
        <>
            {modal && <dialog >
                    <div>
                        <div>
                            <h3>Modal content</h3>
                            <br/>
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