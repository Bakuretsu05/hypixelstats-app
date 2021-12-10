import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function RedirectTo(props) {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(props.to);
  });

  return null;
}
