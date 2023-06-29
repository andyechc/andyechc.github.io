export function HeaderMenuListItem({ children }) {
  return (
    <li className="w-full px-10 py-2 hover:bg-blue-600">
      <a className="block text-md font-normal text-gray-100" href="#home">
        {children}
      </a>
    </li>
  );
}
