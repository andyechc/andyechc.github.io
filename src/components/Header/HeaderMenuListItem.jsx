export function HeaderMenuListItem({ children, to }) {
  return (
    <li className="w-full hover:bg-blue-600">
      <a
        className="block px-10 py-2 text-md font-normal text-gray-100"
        href={to}
      >
        {children}
      </a>
    </li>
  );
}
