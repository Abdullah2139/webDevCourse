function fetchPostData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Post data fetched successfully!");
        }, 1000);
    });
}

function fetchCommentData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Comment data fetched successfully!");
        }, 2000);
    });
}

async function getBlogData() {
    try {
        console.log("Fetching data...");
        // const blogData = await fetchPostData();
        // const commentData = await fetchCommentData();

        const [blogData, commentData] = await Promise.all([fetchPostData(), fetchCommentData()]);

        console.log(blogData);
        console.log(commentData);
        
        console.log("fetch data completed!");
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

getBlogData();