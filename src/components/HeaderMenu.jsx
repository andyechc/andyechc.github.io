import LanguageContext from "../context/LanguageContext";
import { HeaderMenuListItem } from "../components/HeaderMenuListItem";
import { SocialMedias } from "../components/SocialMedias";
import { TranslateButton } from "../components/TranslateButton";
import { useContext } from "react";

export default function HeaderMenu({ show }) {
  const { text } = useContext(LanguageContext);

  return (
    <nav
      className={`w-full py-5 bg-blue-950 md:hidden ${
        show ? "top-0 left-0 relative" : "absolute left-0 top-[-500px]"
      } transition-all`}
    >
      <ul className="w-full h-full">
        <HeaderMenuListItem to="#home">{text.header.link1}</HeaderMenuListItem>
        <HeaderMenuListItem to="#about">{text.header.link2}</HeaderMenuListItem>
        <HeaderMenuListItem to="#">{text.header.link3}</HeaderMenuListItem>
        <HeaderMenuListItem to="#">{text.header.link4}</HeaderMenuListItem>
        <HeaderMenuListItem to="#">{text.header.link5}</HeaderMenuListItem>
        <HeaderMenuListItem to="#">{text.header.link6}</HeaderMenuListItem>
      </ul>

      <TranslateButton />
      <SocialMedias />
    </nav>
  );
}
