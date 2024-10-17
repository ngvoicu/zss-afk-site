"use client";

import Image from 'next/image';
import enFlag from '../../../public/helper/en.jpg'
import roFlag from '../../../public/helper/ro.png'
import Link from 'next/link';
import Cookies from 'js-cookie';

export const addAfkLanguageCookie = (locale: string) => {
    // if (process.env.VERCEL) {
        console.log(">>> on VERCEL >>> setting AFK_LOCALE")
        Cookies.set('AFK_LOCALE', locale, { expires: 365 });
    // }
  };

export default function LanguageSwitcher({ language, url, type }: { language: string, url: string, type: string }) {
    let flag = enFlag;
    let code = 'en';
    if (language === "Romanian") {
        flag = roFlag;
        code = 'ro';
    }

    const handleLanguageChange = () => {
        addAfkLanguageCookie(code);
    };

    let html;
    if (type === 'simple') {
        html = (
            <Link href={url} onClick={handleLanguageChange}>
                <Image src={flag} alt={`${language} language`} width={30} height={20} />
            </Link>
        );
    }
    if (type === 'button') {
        html = (
            <div tabIndex={0} className="btn btn-ghost btn-circle">
                <Link href={url} onClick={handleLanguageChange}>
                    <Image src={flag} alt={`${language} language`} width={30} height={20} />
                </Link>
            </div>
        );
    }
    return <>{html}</>;
}

