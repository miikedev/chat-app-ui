import React from "react";
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow flex px-4 sm:px-6 py-16">
        <div className="w-full max-w-md mx-auto bg-amber-0">{children}</div>
      </main>
    </div>
  );
};

export default AuthLayout;
