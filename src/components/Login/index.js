import React from 'react'
import { Row, Col, Button, Typography } from 'antd';
import firebase, { auth } from '../../firebase/config';
import { addDocument, generateKeywords  } from '../../firebase/service';

const { Title } = Typography;
const fbProvider = new firebase.auth.FacebookAuthProvider();

console.log(auth);

export default function Login() {

    const handleFBLogin = async () => {
        const { additionalUserInfo, user } = await auth.signInWithPopup(fbProvider);

        if (additionalUserInfo?.isNewUser) {
            addDocument('users', {
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                uid: user.uid,
                providerId: additionalUserInfo.providerId,
                keywords: generateKeywords(user.displayName?.toLowerCase()),
            })
        }
    }

    return (
        <div>
            <Row justify="center" style={{ height: 800 }}>
                <Col span={8}>
                    <Title style={{ textAlign: 'center' }} level={3}>FunChat</Title>
                    <Button style={{ width: '100%', marginBottom: 5 }} onClick={handleFBLogin}>Log in with Facebook</Button>
                    <Button style={{ width: '100%' }}>Log in with Google</Button>
                </Col>
            </Row>
        </div>
    )
}
