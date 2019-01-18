import React from 'react';
import { deleteCookie } from '../../helpers/utils.js';

const LogoutBtn = () => (
    <button onClick={() => deleteCookie('login')}>LOGOUT</button>
);

export default LogoutBtn;