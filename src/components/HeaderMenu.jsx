import LanguageContext from "../context/LanguageContext";
import { HeaderMenuListItem } from "../components/HeaderMenuListItem";
import { SocialMedias } from "../components/SocialMedias";
import { useContext } from "react";

export default function HeaderMenu({ show }) {
  const { text, handleLanguage } = useContext(LanguageContext);

  return (
    <nav
      className="w-full bg-gray-900 md:hidden border-b border-gray-600 transition-all"
    >
      <ul className="w-full h-full">
        <HeaderMenuListItem>{text.header.Link1}</HeaderMenuListItem>
        <HeaderMenuListItem>{text.header.Link2}</HeaderMenuListItem>
        <HeaderMenuListItem>{text.header.Link3}</HeaderMenuListItem>
        <HeaderMenuListItem>{text.header.Link4}</HeaderMenuListItem>
        <HeaderMenuListItem>{text.header.Link5}</HeaderMenuListItem>
        <HeaderMenuListItem>{text.header.Link6}</HeaderMenuListItem>
      </ul>

      <SocialMedias />
    </nav>
  );
}
