import UserHeader from '../components/UserHeader.jsx'
import UserPost from '../components/UserPost.jsx'
import post1 from '../public/post1.png'
import post2 from '../public/post2.png'
import post3 from '../public/post3.png'

const UserPage = () => {
  return (
    <>
      <UserHeader />
      <UserPost
        likes={1200}
        replies={481}
        postImg={post1}
        postTitle={'Let`s talk about threads.'}
      />
      <UserPost
        likes={451}
        replies={12}
        postImg={post2}
        postTitle={'Nice tutorial.'}
      />
      <UserPost
        likes={321}
        replies={989}
        postImg={post3}
        postTitle={'Nice guy.'}
      />
      <UserPost
        likes={321}
        replies={989}
        postTitle={'This is my first threads.'}
      />
    </>
  )
}

export default UserPage
