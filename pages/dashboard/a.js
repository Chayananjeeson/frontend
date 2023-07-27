import { useSession, signIn, signOut } from "next-auth/react";

     <nav class="navbar navbar-light bg-success">
  <div class="container-fluid">
    <div class="d-flex justify-content-between align-items-center w-100">
      <div class="d-flex">
        <button class="btn btn-primary mr-2">Add</button>
        <button class="btn btn-danger" onClick={() => signOut()}>Sign out</button>
      </div>
    </div>
  </div>
</nav>