// Create a variable to hold your NFTs
let nfts = [];

// Function to mint a new NFT
function mintNFT(name, description, creator) {
    // Create an NFT object with the provided metadata
    let newNFT = {
        name: name,
        description: description,
        creator: creator
    };
    
    // Store the NFT in the nfts array
    nfts.push(newNFT);
}

// Function to list all NFTs and their metadata
function listNFTs() {
    nfts.forEach(nft => {
        console.log("Name: " + nft.name);
        console.log("Description: " + nft.description);
        console.log("Creator: " + nft.creator);
        console.log("-------------");
    });
}

// Function to get the total number of NFTs created
function getTotalSupply() {
    return nfts.length;
}

// Call your functions below this line

// Mint some NFTs
mintNFT("NFT #1", "A beautiful piece of art", "Artist A");
mintNFT("NFT #2", "A rare collectible", "Collector B");

// List all NFTs
listNFTs();

// Print the total number of NFTs
console.log("Total NFTs minted: " + getTotalSupply());
