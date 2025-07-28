
import { PlusIcon } from 'lucide-react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
  return (
    <>
      <header className='bg-base-300 border-b border-base-content/10'>
        <div className='mx-auto max-w-6xl p-4'>
          <div className='flex items-center justify-between'>
            <h1 className='text-3xl font-bold text-primary font-mono tracking-tight'>Thinkboard.</h1>
            <div className='flex items-center gap-4'>
              <Link to={"/create"} className='btn btn-primary'>
                <PlusIcon className='size-5'/>
                <span>New Note</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;


{/* <nav data-theme="forest" class="container mx-auto px-28 py-9 w-full flex items-center justify-between">

        <h1 className='text-2xl'>navbar</h1>
        <ul className='flex items-center gap-24'>
          <li>
            <NavLink to={'/'}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={'/create'}>
              Create
            </NavLink>
          </li>
          <li>
            <NavLink to={'/getnote'}>
              Note Detailes
            </NavLink>
          </li>
        </ul>
      </nav> */}