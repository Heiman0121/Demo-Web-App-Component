import React, { useState, useEffect } from 'react';

import {
  EyeIcon,
  EyeSlashIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

const PasswordValidation = () => {
  const [password, setPassword] = useState({
    firstPassword: '',
    secondPassword: '',
  });
  const [visible, setVisible] = useState(false);
  const [validLength, setValidLength] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [upperCase, setUpperCase] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [specialChar, setSpecialChar] = useState(false);
  const [match, setMatch] = useState(false);
  const [requiredLength, setRequiredLength] = useState(8);

  const inputChange: (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void = (event) => {
    const { value, name } = event.target;
    setPassword({
      ...password,
      [name]: value,
    });
  };

  useEffect(() => {
    setValidLength(
      password.firstPassword.length >= requiredLength
        ? true
        : false,
    );
    setUpperCase(
      password.firstPassword.toLowerCase() !==
        password.firstPassword,
    );
    setLowerCase(
      password.firstPassword.toUpperCase() !==
        password.firstPassword,
    );
    setHasNumber(/\d/.test(password.firstPassword));
    setMatch(
      !!password.firstPassword &&
        password.firstPassword === password.secondPassword,
    );
    setSpecialChar(
      /[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(
        password.firstPassword,
      ),
    );
  }, [password, requiredLength]);

  return (
    <div className="container max-w-full h-screen mx-auto py-24 px-6 bg-[#181818]">
      <div className="font-sans">
        <div className="max-w-sm mx-auto px-6">
          <div className="relative flex flex-wrap">
            <div className="w-full relative">
              <div className="mt-6">
                <form className="mt-8">
                  <div className="mx-auto max-w-lg">
                    <div className="py-2 relative">
                      <input
                        name="username"
                        placeholder="Username"
                        type="text"
                        className="relative text-md block px-3 py-2  rounded-lg w-full 
                        bg-[#181818] border-2 border-gray-500 placeholder-grey-500 shadow-md hover:border-white focus:placeholder-gray-500 focus:border-blue-600 focus:outline-none text-white"
                      />
                      <label className="absolute bg-[#181818] left-2 -top-0.5 px-1 text-sm text-white ">
                        Username
                      </label>
                    </div>
                    <div className="py-2 relative">
                      <input
                        onChange={inputChange}
                        name="firstPassword"
                        placeholder="Password"
                        type={visible ? 'password' : 'text'}
                        className="relative text-md block px-3 py-2  rounded-lg w-full 
                bg-[#181818] border-2 border-gray-500 placeholder-grey-500 shadow-md hover:border-white focus:placeholder-gray-500 focus:border-blue-600 focus:outline-none text-white"
                      />
                      <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                        {visible ? (
                          <EyeSlashIcon
                            className="block w-6 h-6 text-white"
                            onClick={() =>
                              setVisible(!visible)
                            }
                          />
                        ) : (
                          <EyeIcon
                            className="block w-6 h-6 text-white "
                            onClick={() =>
                              setVisible(!visible)
                            }
                          />
                        )}
                      </span>
                      <label className="absolute bg-[#181818] left-2 -top-0.5 px-1 text-sm text-gray-600 text-white">
                        Password
                      </label>
                    </div>
                    <div className="py-2 relative">
                      <input
                        onChange={inputChange}
                        name="secondPassword"
                        type={visible ? 'password' : 'text'}
                        placeholder="Confirm Password"
                        className="relative text-md block px-3 py-2  rounded-lg w-full 
                bg-[#181818] border-2 border-gray-500 pplaceholder-grey-500 shadow-md hover:border-white focus:placeholder-gray-500 focus:border-blue-600 focus:outline-none text-white"
                      />
                      <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                        {visible ? (
                          <EyeSlashIcon
                            className="block w-6 h-6 text-white"
                            onClick={() =>
                              setVisible(!visible)
                            }
                          />
                        ) : (
                          <EyeIcon
                            className="block w-6 h-6 text-white "
                            onClick={() =>
                              setVisible(!visible)
                            }
                          />
                        )}
                      </span>
                      <label className="absolute bg-[#181818] left-2 -top-0.5 px-1 text-sm text-gray-600 text-white">
                        Confirm Password
                      </label>
                    </div>
                    <br />
                    <br />
                    <div className="container mx-auto bg-[#242424] rounded-lg">
                      <ul className="text-white ">
                        <li className="display: inline-flex mt-1">
                          <span className="p-1">
                            {validLength ? (
                              <CheckCircleIcon className="w-6 h-6 text-green-500" />
                            ) : (
                              <CheckCircleIcon className="w-6 h-6 text-grey-200" />
                            )}
                          </span>
                          <p className="p-1">
                            Longer than 8 charactor
                          </p>
                        </li>
                        <li className="display: inline-flex mt-1">
                          <span className="p-1">
                            {hasNumber ? (
                              <CheckCircleIcon className="w-6 h-6 text-green-500" />
                            ) : (
                              <CheckCircleIcon className="w-6 h-6 text-grey-200" />
                            )}
                          </span>
                          <p className="p-1">
                            Have at least one number
                          </p>
                        </li>
                        <li className="display: inline-flex mt-1">
                          <span className="p-1">
                            {upperCase ? (
                              <CheckCircleIcon className="w-6 h-6 text-green-500" />
                            ) : (
                              <CheckCircleIcon className="w-6 h-6 text-grey-200" />
                            )}
                          </span>
                          <p className="p-1">
                            Have at least one uppercase
                            letter
                          </p>
                        </li>
                        <li className="display: inline-flex mt-1">
                          <span className="p-1">
                            {lowerCase ? (
                              <CheckCircleIcon className="w-6 h-6 text-green-500" />
                            ) : (
                              <CheckCircleIcon className="w-6 h-6 text-grey-200" />
                            )}
                          </span>
                          <p className="p-1">
                            Have at least one lowercase
                            letter
                          </p>
                        </li>
                        <li className="display: inline-flex mt-1">
                          <span className="p-1">
                            {specialChar ? (
                              <CheckCircleIcon className="w-6 h-6 text-green-500" />
                            ) : (
                              <CheckCircleIcon className="w-6 h-6 text-grey-200" />
                            )}
                          </span>
                          <p className="p-1">
                            Have at least one special
                            character
                            <br />
                            (!@#$...etc)
                          </p>
                        </li>
                        <li className="display: inline-flex mt-1">
                          <span className="p-1">
                            {match ? (
                              <CheckCircleIcon className="w-6 h-6 text-green-500" />
                            ) : (
                              <CheckCircleIcon className="w-6 h-6 text-grey-200" />
                            )}
                          </span>
                          <p className="p-1">
                            Password Match
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordValidation;
