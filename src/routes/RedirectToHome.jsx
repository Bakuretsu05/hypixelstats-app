import { useNavigate } from "react-router";

export default function RedirectToHome() {
  const navigate = useNavigate();
  navigate("/");

  return null;
}
