import { layout } from "@/styles/style";

const Layout: React.FC<{ children: JSX.Element; path: string }> = ({
  children,
  path,
}) => {
  let content = (
    <div className={`${layout.flex.row.spaceBetween} flex-1 h-screen w-full`}>
      <nav className='w-1/6 border-2 bg-gray-500'>

      </nav>
      <div className={`${layout.flex.col.spaceBetween} w-5/6`}>
        <header className='border-2 bg-green-500'></header>
        <main className='border-2 bg-zinc-300 h-full'>{children}</main>
        <footer className='border-2 bg-orange-500'></footer>
      </div>
    </div>
  );

  if (path === "/auth") {
    content = children;
  }
  return content;
};

export default Layout;
