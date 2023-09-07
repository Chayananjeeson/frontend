import { useSession, signIn, signOut } from "next-auth/react";
import Link from 'next/link';
import { useRouter } from "next/router";
import Swal from 'sweetalert2';



<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@11.0.18/dist/sweetalert2.min.css"></link>


  
  export default function Component({ posts }) {
  const { data: session } = useSession();
  const router = useRouter();
  //console.log("posts: ", posts)

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    });
  
     if (result.isConfirmed) {
      // Perform the deletion using fetch
      fetch('https://frontend-gray-beta.vercel.app/api/user/' + id, {
        method: 'DELETE',
      }); 
  
      // Reload the page

      return router.push('/dashboard');
  
      // Show success message
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      );
      }
  };

  

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
        <Link href ="./dashboard/user/add">
        <button className="btn btn-warning">Add New</button>
        </Link>

      <br></br>
      <br></br>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>No.</th>
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
                      <button><Link href={`/dashboard/user/edit/${post.id}`} className="btn btn-success btn-sm rounded-0">Edit</Link></button>
                   </li>
                    <li class="list-inline-item">
                   <button class="btn btn-danger btn-sm rounded-0" onClick={() => handleDelete(post.id)}>Delete</button>
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
   
    <div className="container d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
    <div className="card" style={{width: '18rem'}}>
      <div className="card-body">
        <div className="alert alert-danger" role="alert">
          Not signed in <br />
          <button className="btn btn-primary" onClick={() => signIn()}>Sign in</button>
        </div>
      </div>
    </div>
  </div>


    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://frontend-gray-beta.vercel.app/api/user');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  }
}