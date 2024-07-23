# 🚀 React Spotify Playlist App

This is a simple Spotify playlist app built with React. It includes a search bar to find songs, a search results display, and a playlist feature.

## Components

- `App`: This is the main component of the application. It manages the state for search results, the playlist name, and the playlist tracks. It also handles the functionality for searching tracks, adding tracks to the playlist, removing tracks from the playlist, updating the playlist name, and saving the playlist to Spotify.

- `SearchBar`: This component handles the search input. It updates the search term in its local state and calls the `onSearch` method passed from the `App` component when the search button is clicked.

- `SearchResults`: This component displays the search results returned from the Spotify API. It uses the `Tracklist` component to display each individual track.

- `Playlist`: This component displays the user's playlist. It uses the `Tracklist` component to display each individual track in the playlist.

- `Tracklist`: This component takes an array of track objects and renders a series of `Track` components.

- `Track`: This component displays individual track information and includes an add or remove button to add the track to the playlist or remove it.

## Getting Started

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git

Install NPM packages
npm install

## Usage
To use the app, enter a song, album, or artist into the search bar and click the “SEARCH” button. The search results will appear on the left side of the screen. Click the “+” button to add a track to your playlist. You can remove tracks from your playlist by clicking the “-” button. You can also change the name of your playlist by typing into the “New Playlist” field. Once you’re happy with your playlist, click the “SAVE TO SPOTIFY” button to save it to your Spotify account.

## Contributing
Any contributions you make are greatly appreciated.

Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request

## Contact
Joseph Musngi - josephmusgi7@gmail.com
