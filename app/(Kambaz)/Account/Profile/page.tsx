"use client";
import { redirect } from "next/dist/client/components/navigation";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser, User } from "../reducer";
import { RootState } from "../../store";
import { Button, FormControl } from "react-bootstrap";
export default function Profile() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  );
  const [profile, setProfile] = useState<User | null>(null);

  const signout = () => {
    dispatch(setCurrentUser(null));
    redirect("/Account/Signin");
  };

  useEffect(() => {
    if (!currentUser) return redirect("/Account/Signin");
    setProfile(currentUser);
  }, [currentUser]);

  return (
    <div className="wd-profile-screen">
      <h3>Profile</h3>
      {profile && (
        <div>
          <FormControl
            id="wd-username"
            className="mb-2"
          />
          <FormControl
            id="wd-password"
            className="mb-2"
          />
          <FormControl
            id="wd-firstname"
            className="mb-2"
          />
          <FormControl
            id="wd-lastname"
            className="mb-2"
          />
          <FormControl
            id="wd-dob"
            className="mb-2"
            type="date"
          />
          <FormControl
            id="wd-email"
            className="mb-2"
          />
          <select
            className="form-control mb-2"
            id="wd-role"
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>{" "}
            <option value="STUDENT">Student</option>
          </select>
          <Button onClick={signout} className="w-100 mb-2" id="wd-signout-btn">
            Sign out
          </Button>
        </div>
      )}
    </div>
  );
}
