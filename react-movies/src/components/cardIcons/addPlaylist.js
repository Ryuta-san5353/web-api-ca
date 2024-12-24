import React,{useContext} from "react";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { MoviesContext } from "../../contexts/moviesContext";
import { IconButton } from "@mui/material";


const AddPlaylistIcon=({movie})=>{

    const context = useContext(MoviesContext);

    const handleAddPlaylist=(e)=>{
        e.preventDefault();
        context.addToMustWatch(movie);
        

    };


    return (
        <IconButton
          aria-label="add to must watch"
          onClick={handleAddPlaylist}
        >
          <PlaylistAddIcon color="primary" fontSize="large" />
        </IconButton>
      );
};

export default AddPlaylistIcon;