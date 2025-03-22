// import authDBConnect from "@/lib/authDBConnect";

export default async function handleSubmit(
  e: React.FormEvent<HTMLFormElement>
) {
  const formData = new FormData(e.currentTarget);
  const email = formData.get("email");
  const password = formData.get("password");

  // Check if fields exist and are strings
  if (
    !email ||
    !password ||
    typeof email !== "string" ||
    typeof password !== "string"
  ) {
    console.error("Email and password are required.");
    alert("Please fill in both email and password.");
    return;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    console.error("Invalid email format.");
    alert("Please enter a valid email address.");
    return;
  }

  // Password validation with separate checks
  // if (password.length < 6) {
  //   console.error("Password too short.");
  //   alert("Password must be at least 6 characters long.");
  //   return;
  // }

  // if (!/[0-9]/.test(password)) {
  //   console.error("Password missing a number.");
  //   alert("Password must contain at least one number (0-9).");
  //   return;
  // }

  // if (!/[A-Z]/.test(password)) {
  //   console.error("Password missing an uppercase letter.");
  //   alert("Password must contain at least one uppercase letter (A-Z).");
  //   return;
  // }

  // if (!/[a-z]/.test(password)) {
  //   console.error("Password missing a lowercase letter.");
  //   alert("Password must contain at least one lowercase letter (a-z).");
  //   return;
  // }

  // if (!/[!@#$%^&*]/.test(password)) {
  //   console.error("Password missing a special character.");
  //   alert("Password must contain at least one special character (!@#$%^&*).");
  //   return;
  // }

  // If validation passes, proceed with API call or other logic
  console.log("Validation passed:", { email, password });

  return { email, password };
}
