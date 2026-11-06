/* Lab News: posts added by hand (LinkedIn, or any Instagram post you want to pin).
 * Instagram posts are added automatically by the daily GitHub Action (js/ig-posts.js),
 * so you normally only add LinkedIn posts here. Each line becomes one news card.
 *
 *   url   : post link (LinkedIn: "..." > "Copy link to post")        [required]
 *   date  : "YYYY-MM-DD"                                               [recommended]
 *   title : card title (if empty, the first line of text is used)
 *   text  : short summary shown under the title
 *   image : picture for the card, e.g. "assets/news/li_2025_igarss.jpg" (upload the file there)
 *
 * Example:
 *   {url:"https://www.linkedin.com/posts/unist-iris-lab_xxxx-activity-7300000000000000000-abcd",
 *    date:"2025-09-12", title:"IRIS Lab at IGARSS 2025", text:"Five talks from our team in Brisbane.",
 *    image:"assets/news/li_2025_igarss.jpg"},
 */
const POSTS = [
  {"src": "linkedin", "url": "https://www.linkedin.com/company/unist-iris-lab/posts/?feedView=all#swiss-korean-2026", "date": "2026-06-10", "image": "assets/news/li_2026_swiss_korean.jpg", "title": "Prof. Jungho Im invited to speak at Swiss-Korean Science Day 2026", "text": "As part of Swiss-Korean Innovation Week 2026, Prof. Im gives the talk “Earth Observations and Modeling in the Era of AI” on how AI is advancing the use of satellite data for monitoring and responding to changes in the Earth system. June 10, 2026, The Westin Josun Seoul."},
  {"src": "linkedin", "url": "https://www.linkedin.com/company/unist-iris-lab/posts/?feedView=all#wuhan-2026", "date": "2026-05-18", "image": "assets/news/li_2026_wuhan.jpg", "title": "Invited academic talks at Wuhan University", "text": "Prof. Jungho Im (“Remote Sensing-Based Disaster Monitoring and Prediction in the AI Era”) and IRIS alumnus Prof. Cheolhee Yoo of Pusan National University (“Remote Sensing and AI for Urban Sustainability”) gave invited talks at the School of Resources and Environmental Sciences, Wuhan University."},
  {"src": "linkedin", "url": "https://www.linkedin.com/company/unist-iris-lab/posts/?feedView=all#isrs-2026", "date": "2026-05-14", "image": "assets/news/li_2026_isrs.jpg", "title": "Keynote at ISRS 2026 in Matsue, Japan", "text": "Prof. Jungho Im delivers the keynote “Satellite-based Disaster Monitoring and Prediction in the AI Era” at the International Symposium on Remote Sensing 2026, held with the 80th RSSJ Spring Meeting (May 13–15, Kunibiki Messe)."},
  {"src": "linkedin", "url": "https://www.linkedin.com/company/unist-iris-lab/posts/?feedView=all#egu-2026", "date": "2026-05-05", "image": "assets/news/li_2026_egu.jpg", "title": "IRIS Lab at EGU General Assembly 2026 in Vienna", "text": "Eight presentations from the IRIS Lab at EGU26, on burn severity, equitable wildfire forecasting, parcel-level electricity use, sea ice prediction, global urban heat, GEMS super-resolution, carbon uptake monitoring and NH3 downscaling."},
];
