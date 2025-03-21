import RegisterFrom from '@/components/auth/RegisterFrom'

function page() {
    return (
        <div>
            <RegisterFrom />
        </div>
    )
}

export default page


// app/register/page.tsx
// "use client"; // Mark as Client Component since it uses client-side events

// const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);
//     const email = formData.get("email") as string;
//     const password = formData.get("password") as string;

//     // Password validation
//     // if (password.length < 6) {
//     //     alert("Password must be at least 6 characters long.");
//     //     return;
//     // }
//     // if (!/[0-9]/.test(password)) {
//     //     alert("Password must contain at least one number (0-9).");
//     //     return;
//     // }
//     // if (!/[A-Z]/.test(password)) {
//     //     alert("Password must contain at least one uppercase letter (A-Z).");
//     //     return;
//     // }
//     // if (!/[a-z]/.test(password)) {
//     //     alert("Password must contain at least one lowercase letter (a-z).");
//     //     return;
//     // }
//     // if (!/[!@#$%^&*]/.test(password)) {
//     //     alert("Password must contain at least one special character (!@#$%^&*).");
//     //     return;
//     // }

//     console.log({ email, password });

//     const res = await fetch("/api/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//     });

//     console.log(res);

//     if (res.ok) {
//         console.log("Registration successful");
//         // e.currentTarget.reset();
//     } else {
//         console.log(res);
//         console.error("Registration failed");
//         // alert("Registration failed. Please try again.");
//     }
// };

// export default function RegisterPage() {
//     return (
//         <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//                 <label
//                     htmlFor="email"
//                     className="block text-sm font-medium leading-6 text-gray-900">
//                     Email address
//                 </label>
//                 <div className="mt-2">
//                     <input
//                         id="email"
//                         name="email"
//                         type="email"
//                         autoComplete="email"
//                         required
//                         className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
//                 </div>
//             </div>

//             <div>
//                 <div className="flex items-center justify-between">
//                     <label
//                         htmlFor="password"
//                         className="block text-sm font-medium leading-6 text-gray-900">
//                         Password
//                     </label>
//                     <div className="text-sm">
//                         <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
//                             Forgot password?
//                         </a>
//                     </div>
//                 </div>
//                 <div className="mt-2">
//                     <input
//                         id="password"
//                         name="password"
//                         type="password"
//                         autoComplete="current-password"
//                         required
//                         className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
//                 </div>
//             </div>

//             <div>
//                 <button
//                     type="submit"
//                     className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
//                     Sign up
//                 </button>
//             </div>
//         </form>
//     );
// }