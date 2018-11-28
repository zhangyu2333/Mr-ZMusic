export const getIndexData = (success) => {
  wx.request({
    url: "https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1542092502767",
    dataType: 'json',
    success
  })

}


export const getListData = (success) => {
  wx.request({
    url: "https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1542111113082",
    dataType: 'json',
    success
  })
}

export const getSearchData = (success) => {
  wx.request({
    url: "https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1542181964079",
    dataType: 'json',
    success
  })
}

export const getSearchListData = (w = "", n = 20, p = 1, success) => {
  wx.request({
    url: `https://c.y.qq.com/soso/fcgi-bin/client_search_cp?ct=24&qqmusic_ver=1298&new_json=1&remoteplace=txt.yqq.top&searchid=30863175480026072&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=${p}&n=${n}&w=${encodeURI(w)}&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0`,
    dataType: 'json',
    success
  })
}

export const getAlbumInfo = (id, success) => {
  wx.request({
    url: `https://c.y.qq.com/v8/fcg-bin/fcg_v8_album_info_cp.fcg?albummid=${id}&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0`,
    dataType: 'json',
    success
  })
}

export const getSongVkey = (songmid, success) => {
    wx.request({
      url: `https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg?g_tk=1278911659&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&cid=205361747&uin=0&songmid=${songmid}&filename=C400${songmid}.m4a&guid=3655047200`,
      dataType: 'json',
      success
    })
  }


export const getSongInfo = (songId, success) => {
  wx.request({
    url: `https://u.y.qq.com/cgi-bin/musicu.fcg?_=1542366883952`,
    dataType: 'json',
    method: 'POST',
    data: {
      "comm": {
        "g_tk": 1882501989,
        "uin": 2898283105,
        "format": "json",
        "inCharset": "utf-8",
        "outCharset": "utf-8",
        "notice": 0,
        "platform": "h5",
        "needNewCode": 1
      },
      "detail": {
        "module": "music.pf_song_detail_svr",
        "method": "get_song_detail",
        "param": {
          "song_id": songId
        }
      },
      "simsongs": {
        "module": "rcmusic.similarSongRadioServer",
        "method": "get_simsongs",
        "param": {
          "songid": songId
        }
      },
      "gedan": {
        "module": "music.mb_gedan_recommend_svr",
        "method": "get_related_gedan",
        "param": {
          "sin": 0,
          "last_id": 0,
          "song_type": 1,
          "song_id": songId
        }
      },
      "video": {
        "module": "MvService.MvInfoProServer",
        "method": "GetSongRelatedMv",
        "param": {
          "songid": songId,
          "songtype": 1,
          "lastmvid": 0,
          "num": 5
        }
      }
    },
    success
  })
}

// let a = `https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp?g_tk=1619335900&uin=337951079&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&w=${MOVE+YOUR+BODY}&zhidaqu=1&catZhida=1&t=0&flag=1&ie=utf-8&sem=1&aggr=0&perpage=20&n=${20}&p=${1}&remoteplace=txt.mqq.all&_=1542195534159`
