
import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Avatar,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    popover,
  } from "@material-tailwind/react";
  import state from "../Atom";
  import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";


export default function ProfileDropdown() {
    const [user, setUset] = useAtom(state.user)
    const navigate = useNavigate();

  const signOut = () =>{
    localStorage.removeItem("token");
  }


  return (
    <div className="md:mr-10 col-span-1 lg:col-span-2">
    <Popover placement="bottom-end">
    <PopoverHandler>
    
    <Typography variant="h6" color="white" className="flex items-center">
            <p className="mr-3 text-lg  hidden lg:visible lg:flex ">{user ?  user.memberName : ""}</p>
          
            <Avatar src="/icons/9.jpg"/>
   </Typography>
    </PopoverHandler>

    <PopoverContent className="w-72 transparentBackground backdrop-blur-md border-black_first_theme border-2 z-30 relative">
     
      <div className="mb-4 flex items-center gap-4 border-b-2 border-b-black_second_theme pb-4">
        <Avatar src="/icons/9.jpg"/>
        <div>
          <Typography variant="h6" color="white">
          {user ?  user.memberName : ""}
          </Typography>
          <Typography
              variant="small"
              color="gray"
              className="font-medium text-blue-gray-500"
            >
             {user ?  user.email : ""}
            </Typography>
          
        </div>
       
      </div>
      <List className="p-0 ">
      
        <div className="text-initial font-medium text-fifth_color_theme  rounded-lg">
          <ListItem className="hover:bg-black_first_theme hover:text-fifth_color_theme">
            <ListItemPrefix>
            <i className="fa-solid fa-user-large text-forth_color_theme"></i>
            </ListItemPrefix>
           Profile
          </ListItem>
        </div>

        <div onClick={() => navigate("animeList")} className="text-initial font-medium text-fifth_color_theme  rounded-lg">
          <ListItem className="hover:bg-black_first_theme hover:text-fifth_color_theme">
            <ListItemPrefix>
            <i class="fa-solid fa-list  text-forth_color_theme"></i>
            </ListItemPrefix>
           Anime List
          </ListItem>
        </div>
       
        <div className="text-initial font-medium text-fifth_color_theme">
          <ListItem  className="hover:bg-black_first_theme hover:text-fifth_color_theme">
            <ListItemPrefix>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.00299 5.884L9.99999 9.882L17.997 5.884C17.9674 5.37444 17.7441 4.89549 17.3728 4.54523C17.0015 4.19497 16.5104 3.99991 16 4H3.99999C3.48958 3.99991 2.99844 4.19497 2.62717 4.54523C2.2559 4.89549 2.03259 5.37444 2.00299 5.884Z"
                  fill="#FFA458"
                />
                <path
                  d="M18 8.11798L10 12.118L2 8.11798V14C2 14.5304 2.21071 15.0391 2.58579 15.4142C2.96086 15.7893 3.46957 16 4 16H16C16.5304 16 17.0391 15.7893 17.4142 15.4142C17.7893 15.0391 18 14.5304 18 14V8.11798Z"
                  fill="#FFA458"
                />
              </svg>
            </ListItemPrefix>
            Contact
          </ListItem>
        </div>

        <div className="text-initial font-medium text-fifth_color_theme  rounded-lg">
          <ListItem className="hover:bg-black_first_theme hover:text-fifth_color_theme">
            <ListItemPrefix>
            <i class="fa-solid fa-gear  text-forth_color_theme"></i>
            </ListItemPrefix>
           Settings
          </ListItem>
        </div>

        <a href="http://localhost:5173/home" className=" font-medium text-fifth_color_theme ">
          <ListItem className="flex justify-center hover:bg-black_first_theme hover:text-fifth_color_theme"  onClick={signOut}>
            <ListItemPrefix>
            <i className="fa-solid fa-arrow-right-from-bracket text-forth_color_theme"></i>
            </ListItemPrefix>
            Sign out
          </ListItem>
        </a>
      </List>
    </PopoverContent>

    
  </Popover>
  </div>
  )
}


