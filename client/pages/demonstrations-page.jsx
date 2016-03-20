DemonstrationsPage = React.createClass({
  renderDemonstration(demonstration) {
    return <Demonstration demonstration={demonstration} key={demonstration._id}/>
  },

  render() {
    return (
      <div>
        <h1 className='text-xs-center m-t-3'>Demonstrations</h1>
        <div className='col-xs-12 col-md-3 col-lg-4'>
          <p><strong>Categories</strong></p>
          <p><i className="fa fa-gavel">&nbsp;&nbsp;Criminal Justice</i></p>
          <p><i className="fa fa-university">&nbsp;&nbsp;Politics</i></p>
        </div>

        <div className='col-xs-12 col-md-6 col-lg-4'>
          {this.getDemonstrations().map(this.renderDemonstration)}
        </div>

        <div className='col-xs-12 col-md-3 col-lg-4 text-xs-right'>
          <p><strong>Topics</strong></p>
          <p>Justice for Jerome</p>
          <p>#ancientfuturecollective</p>
        </div>
      </div>
    )
  },

  getDemonstrations() {
    var now = new Date().getTime()
    var hourAgo = now - (60 * 60 * 1000)
    var hoursAgo = now - (60 * 60 * 13 * 1000)
    var weekAgo = now - (60 * 60 * 24 * 7 * 1000)
    return [
      {
        _id: 1,
        title: "Moving Forward!!!",
        body: "Today I was due in court to get a couple of dates set to have this case brought to an end as it concerns my Liberty. Anyhow, April 4th has been set to have a hearing concerning exactly what of the identification from the 1994 trial testimony of the recanting witnesses can be used in the upcoming trial which is set for May 2nd… I do deeply wish for all of you to attend these last two court dates and be a part of this long awaited justice in this phase of my progression for total justice for all!!! 2700 Tulane Ave., Section “L” 2nd floor…",
        image: "moving.jpg",
        hashtag: "Justice for Jerome",
        link: "http://www.justiceforjerome.org/2016/03/16/moving-forward/",
        category: "criminal-justice",
        createdAt: new Date(hourAgo)
      },
      {
        _id: 2,
        title: "Donald Trump can offend any group he wants so long as he promises White America that they will be great again",
        body: "Many of Trump's supporters are proclaiming to be NEWLY REGISTERED VOTERS, which means that the Republican Party stands to benefit from a tremendous surge. Many of them are registering to vote for the first time in their lives, and that is unprecedented because most lower income class white Americans don't even vote. In 2014, just 41.9 percent of voting-age citizens in the United States voted, which means 58.1% of the country did not vote, and they haven't been voting for a long time. It would behoove the 41.9% of voting Americans that an unregistered 58.1% can all of a sudden become an active registered voting class very soon! ",
        image: "trump.jpg",
        hashtag: "#ancientfuturecollective",
        link: "http://www.justiceforjerome.org/2016/03/16/moving-forward/",
        category: "politics",
        createdAt: new Date(hoursAgo)
      },
      {
        _id: 3,
        title: "Next Court Date March 15 @ 8AM",
        body: "next court Date Tuesday, March 15, 2016, 8:00 AM Sharp Judge Ziblich Seciton L   More details to come…",
        image: "next.jpg",
        hashtag: "Justice for Jerome",
        link: "http://www.justiceforjerome.org/2016/03/12/next-court-date-march-15-8am/",
        category: "criminal-justice",
        createdAt: new Date(weekAgo)
      }
    ];
  },
})
