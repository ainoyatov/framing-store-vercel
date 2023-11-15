/** @type {import('next').NextConfig} */

module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
                port: '',
                pathname: '/photos/**'
            }
        ]
    }
}

// module.exports = nextConfig



// module.exports = {
//     reactStrictMode: true,
//     images: {
//         domains: ['bit.ly'],
//     }
// }




