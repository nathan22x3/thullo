import { Menu, Transition } from '@headlessui/react';
import { ReactComponent as MoreIcon } from 'assets/icons/more.svg';
import React, { Fragment } from 'react';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

const BoardListOptions = ({ onRename }) => {
  return (
    <Menu as='div' css={tw`relative inline-block text-left`}>
      <Menu.Button>
        <MoreIcon css={tw`cursor-pointer`} width={20} />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items
          css={tw`overflow-hidden origin-top-right z-50 absolute right-0 w-56 mt-2 rounded-xl bg-white ring-1 ring-black ring-opacity-20 focus:outline-none`}
        >
          <Menu.Item>
            {({ active }) => (
              <span
                css={[
                  active ? tw`bg-red text-white` : tw`text-gray-500`,
                  tw`block px-4 py-3 text-sm cursor-pointer`,
                ]}
              >
                Delete this list
              </span>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default BoardListOptions;
