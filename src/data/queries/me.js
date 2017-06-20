/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import UserType from '../types/UserType';

const me = {
  type: UserType,
  resolve({ request }) {
    return request.user && {
      id: request.user.id,
      account: request.user.account,
      email: request.user.email,
      roles: request.user.roles,
    };
  },
};

export default me;
