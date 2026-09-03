import Logo from "@/components/ui/branding/logo";
import Button from "@/components/ui/actions/button";
import CenteredWrapper from "@/components/ui/layout/centered-wrapper";
import ResponsiveWrapper from "@/components/ui/layout/responsive-wrapper";
import Link from "next/link";
import { UserData } from "@/lib/supabase/types";
import AccountDropdown from "./account-dropdown";
import MobileMenu from "./mobile-menu";

const Navbar = ({ user }: { user: UserData | null }) => {
  return (
    <ResponsiveWrapper
      as="header"
      className="sticky top-0 z-10 h-14 border-b border-nt-20 bg-nt-05"
    >
      <CenteredWrapper as="nav" className="flex-row gap-x-2">
        <div className="contents sm:hidden">
          <MobileMenu user={user || undefined} />
        </div>
        <Link href="/" className="hover:*:text-se-95">
          <Logo withText className="inline-block text-2xl max-sm:hidden" />
          <Logo className="-mb-0.5 text-2xl sm:hidden" />
        </Link>
        <div className="flex-1" />
        <div className="hidden sm:contents">
          <Button variant="ghost" as={Link} href="/courses">
            Courses
          </Button>
          <Button variant="ghost" as={Link} href="/resources">
            Resources
          </Button>
          <Button variant="ghost" as={Link} href="/about">
            About
          </Button>
          {!user && (
            <Button variant="secondary" as={Link} href="/log-in">
              Log in
            </Button>
          )}
        </div>
        {!user || !user.username ? (
          <Button
            variant={user ? "link" : "primary"}
            as={Link}
            href={user ? "/welcome" : "/sign-up"}
          >
            {user ? "New user" : "Sign up"}
          </Button>
        ) : (
          <AccountDropdown username={user.username} />
        )}
      </CenteredWrapper>
    </ResponsiveWrapper>
  );
};

export default Navbar;
