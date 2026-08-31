import Logo from "@/components/brand/Logo";
import Button from "@/components/ui/button/Button";
import CenteredCol from "@/components/ui/responsive/CenteredCol";
import ResponsiveCols from "@/components/ui/responsive/ResponsiveCols";

const Navbar = () => {
  return (
    <ResponsiveCols
      as="header"
      className="sticky top-0 z-10 border-b border-b-zinc-900 bg-zinc-950"
    >
      <CenteredCol as="nav" className="flex-row gap-x-2 py-2">
        <Logo withText />
        <div className="flex-1" />
        <Button variant="ghost" as="Link" href="/">
          Dashboard
        </Button>
        <Button variant="ghost" as="Link" href="/">
          Courses
        </Button>
        <Button variant="ghost" as="Link" href="/">
          About
        </Button>
        <div className="mr-2.5 self-stretch border-r border-r-zinc-900" />
        <Button variant="secondary" as="Link" href="/">
          Log in
        </Button>
        <Button variant="primary" as="Link" href="/">
          Sign up
        </Button>
      </CenteredCol>
    </ResponsiveCols>
  );
};

export default Navbar;
