function Profile() {
   return (
     <img
       src="https://i.imgur.com/MK3eW3As.jpg"
       alt="Katherine Johnson"
     />
   );
 }
 
 export default function Gallery() {
   return (
     <section class="flex flex-row gap-2 flex-wrap align-center justify-center">
       <h1 class="flex-grow w-full text-center"> Amazing scientists</h1>
       <Profile />
       <Profile />
       <Profile />
     </section>
   );
 }
 