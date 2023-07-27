import { useSession, signIn, signOut } from "next-auth/react";
import Link from 'next/link';

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/user');
  const posts = await res.json();


  return {
    props: {
      posts,
    },
  };
}

export default function Component({ posts }) {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
      <nav class="navbar navbar-light bg-success">
        <div class="container-fluid">
          <div class="d-flex justify-content-between align-items-center w-100">
            <div>Signed in as {session.user.email} {session.user.fname} {session.user.lname}</div>
            <button class="btn btn-danger" onClick={() => signOut()}>Sign out</button>
          </div>
        </div>
      </nav>
      <br></br>
      <div className="container mt-5">
        <div className="card mt-4">
          <div className="card-body">
        <Link href ="./dashboard/addform">
        <button className="btn btn-warning">Add New</button>
        </Link>

      <br></br>
      <br></br>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Student ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Password</th>
              <th>Status</th>
              <th>Actions</th> {/* เพิ่มคอลัมน์ Actions */}
            </tr>
          </thead>
          <tbody>
            {posts.user.map((post,i) => (
              <tr key={post.id}>
                <td className="text-center">{i+1}</td>
                <td>{post.studentid}</td>
                <td>{post.firstname}</td>
                <td>{post.lastname}</td>
                <td>{post.username}</td>
                <td>{post.password}</td>
                <td>{post.status}</td>
                <td>
                <ul class="list-inline m-0">
                 <li class="list-inline-item">
                      <button class="btn btn-success btn-sm rounded-0">Edit</button>
                   </li>
                    <li class="list-inline-item">
                   <button class="btn btn-danger btn-sm rounded-0">Delete</button>
                      </li>
                         </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="alert alert-danger" role="alert">
        Not signed in <br />
        <button className="btn btn-primary" onClick={() => signIn()}>Sign in</button>
      </div>
    </>
  );
}
