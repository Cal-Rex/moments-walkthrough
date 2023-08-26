import React, { useEffect, useState } from 'react'
import styles from '../../styles/Comment.module.css'
import { axiosRes } from '../../api/axiosDefaults'
import { Media } from 'react-bootstrap'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import Avatar from '../../components/Avatar'

const Comment = ({content, updated_at, owner, profile_id}) => {
    const [ownerAvatar, setOwnerAvatar] = useState("")

useEffect(() => {
    const handleMount = async () => {
        try {
            const {data} = await axiosRes.get(`/profiles/${profile_id}`);
            console.log(data.image)
            setOwnerAvatar(data.image)
        } catch (err) {
            console.log(err)
        }
    }
    handleMount();
}, [])

  return (
    <div>
        <hr />
        <Media>
            <Link to={`/profiles/${profile_id}`}>
                <Avatar src={ownerAvatar} />
            </Link>
            <Media.Body className='align-self-center ml-2'>
            <Link to={`/profiles/${profile_id}`}>
                <span className={styles.Owner}>{owner}</span>
            </Link>
                <span className={styles.Date}>{updated_at}</span>
                <p>{content}</p>
            </Media.Body>
        </Media>
    </div>
    
  )
}

export default Comment