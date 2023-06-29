import LanguageContext from "../context/LanguageContext";
import { HeaderMenuListItem } from "../components/HeaderMenuListItem";
import { SocialMedias } from "../components/SocialMedias";
import { TranslateButton } from "../components/TranslateButton";
import { useContext } from "react";

export default function HeaderMenu({ show }) {
  const { text, handleLanguage } = useContext(LanguageContext);

  return (
    <nav className="w-full bg-gray-900 md:hidden border-b border-gray-600 transition-all">
      <ul className="w-full h-full">
        <HeaderMenuListItem>{text.header.link1}</HeaderMenuListItem>
        <HeaderMenuListItem>{text.header.link2}</HeaderMenuListItem>
        <HeaderMenuListItem>{text.header.link3}</HeaderMenuListItem>
        <HeaderMenuListItem>{text.header.link4}</HeaderMenuListItem>
        <HeaderMenuListItem>{text.header.link5}</HeaderMenuListItem>
        <HeaderMenuListItem>{text.header.link6}</HeaderMenuListItem>
      </ul>

      <TranslateButton />
      <SocialMedias />
    </nav>
  );
}
