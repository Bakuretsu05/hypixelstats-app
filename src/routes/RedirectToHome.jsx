import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function RedirectToHome() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  });

  return null;
}
