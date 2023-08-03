import React from 'react';

import { useStore } from 'hooks';

export default function Header({ children }) {
  const { user } = useStore();

  return (
    <div className="bg-white shadow">
      <div className="px-4 sm:px-6 -mt-2">
        <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
          <div className="min-w-0 flex-1">
            <div className="flex items-center">
              <div>
                <div className="flex items-center gap-1">
                  <img
                    src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBtYW4lMjBzbWlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                    className="w-[70px] h-[70px] rounded-full "
                  />
                  <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:leading-9">
                    Good Evening Oluwayemisi! {user?.firstName}
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">{children}</div>
        </div>
      </div>
    </div>
  );
}
