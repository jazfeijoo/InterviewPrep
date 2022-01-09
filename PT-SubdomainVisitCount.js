// A website domain "discuss.leetcode.com" consists of various subdomains. At the top level, we have "com", at the next level, we have "leetcode.com" and at the lowest level, "discuss.leetcode.com". When we visit a domain like "discuss.leetcode.com", we will also visit the parent domains "leetcode.com" and "com" implicitly.
// Given an array of count-paired domains cpdomains, return an array of the count-paired domains of each subdomain in the input. You may return the answer in any order.
// EX: Input: cpdomains = ["9001 discuss.leetcode.com"] Output: ["9001 leetcode.com","9001 discuss.leetcode.com","9001 com"]
// EX: Input: cpdomains = ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"] Output: ["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"]
function countPairSubdomains(input){
    //for each COUNT - DOMAIN... 
    let map = {}
    for(let i = 0; i < input.length; i ++){
        let count_domain = input[i]
        let count_dom_arr = count_domain.split(' ')
        let count = Number(count_dom_arr[0])
        let domain = count_dom_arr[1]
        while(0 < domain.length){
            map[domain] ? map[domain] += count : map[domain] = count 
            let domArr = domain.split('.')
            domArr.shift()
            domain = domArr.join('.')
        }
    }
    let final = Object.entries(map).map((entry) => {
        return ''.concat(entry[1]).concat(' ').concat(entry[0])
    })
    return final 
}

//countPairSubdomains(["9001 discuss.leetcode.com"])
countPairSubdomains(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"])