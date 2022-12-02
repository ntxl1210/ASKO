import NavbarItem from '../NavbarItem';

import { navbar } from '../../../../utils';

export default function Navbar() {
  return (
    <div>
      {navbar.map(item => (
        <NavbarItem key={item} data={item} />
      ))}
    </div>
  );
}
