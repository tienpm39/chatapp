import React from 'react'
import styled from 'styled-components'
import { Avatar, Button, Typography } from 'antd';
import { auth } from '../../firebase/config';
import { AuthContext } from '../../context/AuthProvider';

const ContainerWrapper = styled.div`
    display:flex;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid rgba(82,38,83);

    .username {
        margin-left: 5px;
        color: white;
    }
`;

export default function UserInfo() {



    const {
        user: {
            displayName,
            photoURL,
        }
    } = React.useContext(AuthContext);

    return (
        <ContainerWrapper>
            <div>
                <Avatar src={photoURL}>{photoURL ? '' : displayName?.charAt(0).toUpperCase()}</Avatar>
                <Typography.Text className="username">{displayName}</Typography.Text>
            </div>
            <Button ghost onClick={() => auth.signOut()}>Log out</Button>
        </ContainerWrapper>
    )
}
