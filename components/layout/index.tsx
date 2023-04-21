import { layout } from "@/styles/style";
import SideNavigation from "./SideNav";
import { AUTH } from "@/constants/routes";

const Layout: React.FC<{ children: JSX.Element; path: string }> = ({
  children,
  path,
}) => {
  let content = (
    <div className={`${layout.flex.row.spaceBetween} flex-1 h-screen w-full`}>
      <nav className='w-1/6'>
        <SideNavigation />
      </nav>
      <div className={`${layout.flex.col.spaceBetween} w-5/6`}>
        <header></header>
        <main className=' h-full'>{children}</main>
        <footer></footer>
      </div>
    </div>
  );

  if (path === AUTH) {
    content = children;
  }
  return content;
};

export default Layout;
