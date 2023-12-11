import Link from "next/link";

import Container from "@/components/ui/container";
import UserAvater from "@/components/user-avater";
import Image from "next/image";

const Navbar = async () => {
  return ( 
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <Image
              src="/logo.png"
              alt="Logo"
              width={203}
              height={54}
            />
          </Link>
          <UserAvater />
        </div>
      </Container>
    </div>
  );
};
 
export default Navbar;
