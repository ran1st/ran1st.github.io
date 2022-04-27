// Một số bài hát có thể bị lỗi do liên kết bị hỏng. Vui lòng thay thế liên kết khác để có thể phát
// Some songs may be faulty due to broken links. Please replace another link so that it can be played

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PlAYER_STORAGE_KEY = "F8_PLAYER";

const player = $(".player");
const cd = $(".cd");
const heading = $("header h2");
const cdThumb = $(".cd-thumb");
const audio = $("#audio");
const playBtn = $(".btn-toggle-play");
const progress = $("#progress");
const prevBtn = $(".btn-prev");
const nextBtn = $(".btn-next");
const randomBtn = $(".btn-random");
const repeatBtn = $(".btn-repeat");
const playlist = $(".playlist");

const app = {
  currentIndex: 0,
  isPlaying: false,
  isRandom: false,
  isRepeat: false,
  config: {},
  // (1/2) Uncomment the line below to use localStorage
  // config: JSON.parse(localStorage.getItem(PlAYER_STORAGE_KEY)) || {},
  songs: [
    {
      name: "Kẹo Bông Gòn Remix",
      singer: "DJ Đại Mèo",
      path: "mp3/Keo-Bong-Gon-Remix_DJ-Dai-Meo.mp3",
      image: "https://lh3.googleusercontent.com/a-/AOh14GhNfu_GKjrsxeYKhIVrnxq83Ys4QA57OVezM2P7=s360-p-rw-no"
    },
    {
      name: "2 In 1 Remix",
      singer: "guHancci Ft VD",
      path: "mp3/2in1_guHancci-Ft-VD.mp3",
      image: "https://lh3.googleusercontent.com/a-/AOh14GhNfu_GKjrsxeYKhIVrnxq83Ys4QA57OVezM2P7=s360-p-rw-no"
    },
    {
      name: "24h Remix",
      singer: "LyLy Ft Magazine",
      path: "mp3/24h-Remix_LyLy-X-Magazine.mp3",
      image: "https://lh3.googleusercontent.com/a-/AOh14GhNfu_GKjrsxeYKhIVrnxq83Ys4QA57OVezM2P7=s360-p-rw-no"
    },
    {
      name: "Anh Chẳng Sao Mà",
      singer: "Ben Heineken Remix",
      path: "mp3/Anh-Chang-Sao-Ma_Ben-Heineken-Remix.mp3",
      image: "https://lh3.googleusercontent.com/a-/AOh14GhNfu_GKjrsxeYKhIVrnxq83Ys4QA57OVezM2P7=s360-p-rw-no"
    },
    {
      name: "Bệnh Biến Remix",
      singer: "BINGBIAN",
      path: "mp3/Benh-Bien-Remix_BINGBIAN.mp3",
      image: "https://lh3.googleusercontent.com/a-/AOh14GhNfu_GKjrsxeYKhIVrnxq83Ys4QA57OVezM2P7=s360-p-rw-no"
    },
    {
      name: "Cô Gái M52",
      singer: "Huy Ft Tùng Viu",
      path: "mp3/Co-Gai-M52_Huy-Ft-Tung-Viu.mp3",
      image: "https://lh3.googleusercontent.com/a-/AOh14GhNfu_GKjrsxeYKhIVrnxq83Ys4QA57OVezM2P7=s360-p-rw-no"
    },
    {
      name: "Đâu Còn Đây Remix",
      singer: "LEEKEN Ft NAL",
      path: "mp3/Dau-Con-Day_LEEKEN-X-NAL.mp3",
      image: "https://lh3.googleusercontent.com/a-/AOh14GhNfu_GKjrsxeYKhIVrnxq83Ys4QA57OVezM2P7=s360-p-rw-no"
    },
    {
      name: "Đếm Ngày Xa Em Remix",
      singer: "Lou Hoàng",
      path: "mp3/Dem-Ngay-Xa-Em-Remix.mp3",
      image: "https://lh3.googleusercontent.com/a-/AOh14GhNfu_GKjrsxeYKhIVrnxq83Ys4QA57OVezM2P7=s360-p-rw-no"
    },
    {
      name: "Đúng Người Đúng Thời Điểm",
      singer: "Htrol Ft Phạm Thành Remix",
      path: "mp3/Dung-Nguoi-Dung-Thoi-Diem_Htrol-Pham-Thanh-Remix.mp3",
      image: "https://lh3.googleusercontent.com/a-/AOh14GhNfu_GKjrsxeYKhIVrnxq83Ys4QA57OVezM2P7=s360-p-rw-no"
    },
    {
      name: "Đừng Yêu Nữa Em Mệt Rồi",
      singer: "Htrol Ft MIN",
      path: "mp3/Dung-Yeu-Nua-Em-Met-Roi-Htrol-Ft-MIN.mp3",
      image: "https://lh3.googleusercontent.com/a-/AOh14GhNfu_GKjrsxeYKhIVrnxq83Ys4QA57OVezM2P7=s360-p-rw-no"
    },
    {
      name: "Em Sẽ Là Cô Dâu Remix",
      singer: "Minh Vương M4u",
      path: "mp3/Em-Se-La-Co-Dau-Remix.mp3",
      image: "https://lh3.googleusercontent.com/a-/AOh14GhNfu_GKjrsxeYKhIVrnxq83Ys4QA57OVezM2P7=s360-p-rw-no"
    },
    {
      name: "Em Sẽ Là Cô Dâu",
      singer: "Minh Vương M4u",
      path: "mp3/Em-Se-La-Co-Dau.mp3",
      image: "https://lh3.googleusercontent.com/a-/AOh14GhNfu_GKjrsxeYKhIVrnxq83Ys4QA57OVezM2P7=s360-p-rw-no"
    },
    {
      name: "Mashup Đi Đi Đi x Nevada",
      singer: "Daniel Mastro Mashup Remix",
      path: "mp3/Mashup-Di-Di-Di-x-Nevada-Daniel-Mastro-Mashup-Remix.mp3",
      image: "https://lh3.googleusercontent.com/a-/AOh14GhNfu_GKjrsxeYKhIVrnxq83Ys4QA57OVezM2P7=s360-p-rw-no"
    },
    {
      name: "Một Bước Yêu Vạn Dạm Đau Remix",
      singer: "DJ Đại Mèo",
      path: "mp3/Mot-Buoc-Yeu-Van-Dam-Dau-Remix_Mr-Siro.mp3",
      image: "https://lh3.googleusercontent.com/a-/AOh14GhNfu_GKjrsxeYKhIVrnxq83Ys4QA57OVezM2P7=s360-p-rw-no"
    },
    {
      name: "Kẹo Bông Gòn Remix",
      singer: "DJ Đại Mèo",
      path: "mp3/Keo-Bong-Gon-Remix_DJ-Dai-Meo.mp3",
      image: "https://lh3.googleusercontent.com/a-/AOh14GhNfu_GKjrsxeYKhIVrnxq83Ys4QA57OVezM2P7=s360-p-rw-no"
    },
    {
      name: "Một Triệu Khả Năng Remix",
      singer: "Htrol Remix",
      path: "mp3/Mot-Trieu-Kha-Nang-Remix.mp3",
      image: "https://lh3.googleusercontent.com/a-/AOh14GhNfu_GKjrsxeYKhIVrnxq83Ys4QA57OVezM2P7=s360-p-rw-no"
    },
    {
      name: "Người Âm Phủ",
      singer: "OSAD",
      path: "mp3/Nguoi-Am-Phu_OSAD.mp3",
      image: "https://lh3.googleusercontent.com/a-/AOh14GhNfu_GKjrsxeYKhIVrnxq83Ys4QA57OVezM2P7=s360-p-rw-no"
    },
    {
      name: "Xin Một Lần Ngoại Lệ Remix",
      singer: "Trịnh Đình Quang",
      path: "mp3/Xin-Mot-Lan-Ngoai-Le-Remix_Trinh-Dinh-Quang-Ft-Keyo.mp3",
      image: "https://lh3.googleusercontent.com/a-/AOh14GhNfu_GKjrsxeYKhIVrnxq83Ys4QA57OVezM2P7=s360-p-rw-no"
    },
    {
      name: "Yao Si Ting Betrayal",
      singer: "DJ DSmall Remix",
      path: "mp3/Yao-Si-Ting_Betrayal-DJ-DSmall-Remix.mp3",
      image: "https://lh3.googleusercontent.com/a-/AOh14GhNfu_GKjrsxeYKhIVrnxq83Ys4QA57OVezM2P7=s360-p-rw-no"
    },
    {
      name: "Yêu Anh Em Nhé",
      singer: "Phạm Thành Remix",
      path: "mp3/Yeu-Anh-Em-Nhe_Pham-Thanh-Remix.mp3",
      image: "https://lh3.googleusercontent.com/a-/AOh14GhNfu_GKjrsxeYKhIVrnxq83Ys4QA57OVezM2P7=s360-p-rw-no"
    },
    {
      name: "Chỉ Cần Em Nói Có",
      singer: "Doãn Hiếu",
      path: "mp3/Chi-Can-Em-Noi-Co_Doan-Hieu.mp3",
      image: "https://lh3.googleusercontent.com/a-/AOh14GhNfu_GKjrsxeYKhIVrnxq83Ys4QA57OVezM2P7=s360-p-rw-no"
    },
    {
      name: "Ord Sak Snea",
      singer: "ARS Ft Vy Sweetie",
      path: "mp3/Orb-Sak-Snea_ARS-Ft-Vy-Sweetie.mp3",
      image: "https://lh3.googleusercontent.com/a-/AOh14GhNfu_GKjrsxeYKhIVrnxq83Ys4QA57OVezM2P7=s360-p-rw-no"
    }
  ],
  setConfig: function (key, value) {
    this.config[key] = value;
    // (2/2) Uncomment the line below to use localStorage
    // localStorage.setItem(PlAYER_STORAGE_KEY, JSON.stringify(this.config));
  },
  render: function () {
    const htmls = this.songs.map((song, index) => {
      return `
                        <div class="song ${
                          index === this.currentIndex ? "active" : ""
                        }" data-index="${index}">
                            <div class="thumb"
                                style="background-image: url('${song.image}')">
                            </div>
                            <div class="body">
                                <h3 class="title">${song.name}</h3>
                                <p class="author">${song.singer}</p>
                            </div>
                            <div class="option">
                                <i class="fas fa-ellipsis-h"></i>
                            </div>
                        </div>
                    `;
    });
    playlist.innerHTML = htmls.join("");
  },
  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.songs[this.currentIndex];
      }
    });
  },
  handleEvents: function () {
    const _this = this;
    const cdWidth = cd.offsetWidth;

    // Xử lý CD quay / dừng
    // Handle CD spins / stops
    const cdThumbAnimate = cdThumb.animate([{ transform: "rotate(360deg)" }], {
      duration: 10000, // 10 seconds
      iterations: Infinity
    });
    cdThumbAnimate.pause();

    // Xử lý phóng to / thu nhỏ CD
    // Handles CD enlargement / reduction
    document.onscroll = function () {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const newCdWidth = cdWidth - scrollTop;

      cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
      cd.style.opacity = newCdWidth / cdWidth;
    };

    // Xử lý khi click play
    // Handle when click play
    playBtn.onclick = function () {
      if (_this.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    };

    // Khi song được play
    // When the song is played
    audio.onplay = function () {
      _this.isPlaying = true;
      player.classList.add("playing");
      cdThumbAnimate.play();
    };

    // Khi song bị pause
    // When the song is pause
    audio.onpause = function () {
      _this.isPlaying = false;
      player.classList.remove("playing");
      cdThumbAnimate.pause();
    };

    // Khi tiến độ bài hát thay đổi
    // When the song progress changes
    audio.ontimeupdate = function () {
      if (audio.duration) {
        const progressPercent = Math.floor(
          (audio.currentTime / audio.duration) * 100
        );
        progress.value = progressPercent;
      }
    };

    // Xử lý khi tua song
    // Handling when seek
    progress.onchange = function (e) {
      const seekTime = (audio.duration / 100) * e.target.value;
      audio.currentTime = seekTime;
    };

    // Khi next song
    // When next song
    nextBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.nextSong();
      }
      audio.play();
      _this.render();
      _this.scrollToActiveSong();
    };

    // Khi prev song
    // When prev song
    prevBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.prevSong();
      }
      audio.play();
      _this.render();
      _this.scrollToActiveSong();
    };

    // Xử lý bật / tắt random song
    // Handling on / off random song
    randomBtn.onclick = function (e) {
      _this.isRandom = !_this.isRandom;
      _this.setConfig("isRandom", _this.isRandom);
      randomBtn.classList.toggle("active", _this.isRandom);
    };

    // Xử lý lặp lại một song
    // Single-parallel repeat processing
    repeatBtn.onclick = function (e) {
      _this.isRepeat = !_this.isRepeat;
      _this.setConfig("isRepeat", _this.isRepeat);
      repeatBtn.classList.toggle("active", _this.isRepeat);
    };

    // Xử lý next song khi audio ended
    // Handle next song when audio ended
    audio.onended = function () {
      if (_this.isRepeat) {
        audio.play();
      } else {
        nextBtn.click();
      }
    };

    // Lắng nghe hành vi click vào playlist
    // Listen to playlist clicks
    playlist.onclick = function (e) {
      const songNode = e.target.closest(".song:not(.active)");

      if (songNode || e.target.closest(".option")) {
        // Xử lý khi click vào song
        // Handle when clicking on the song
        if (songNode) {
          _this.currentIndex = Number(songNode.dataset.index);
          _this.loadCurrentSong();
          _this.render();
          audio.play();
        }

        // Xử lý khi click vào song option
        // Handle when clicking on the song option
        if (e.target.closest(".option")) {
        }
      }
    };
  },
  scrollToActiveSong: function () {
    setTimeout(() => {
      $(".song.active").scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }, 300);
  },
  loadCurrentSong: function () {
    heading.textContent = this.currentSong.name;
    cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
    audio.src = this.currentSong.path;
  },
  loadConfig: function () {
    this.isRandom = this.config.isRandom;
    this.isRepeat = this.config.isRepeat;
  },
  nextSong: function () {
    this.currentIndex++;
    if (this.currentIndex >= this.songs.length) {
      this.currentIndex = 0;
    }
    this.loadCurrentSong();
  },
  prevSong: function () {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.songs.length - 1;
    }
    this.loadCurrentSong();
  },
  playRandomSong: function () {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.songs.length);
    } while (newIndex === this.currentIndex);

    this.currentIndex = newIndex;
    this.loadCurrentSong();
  },
  start: function () {
    // Gán cấu hình từ config vào ứng dụng
    // Assign configuration from config to application
    this.loadConfig();

    // Định nghĩa các thuộc tính cho object
    // Defines properties for the object
    this.defineProperties();

    // Lắng nghe / xử lý các sự kiện (DOM events)
    // Listening / handling events (DOM events)
    this.handleEvents();

    // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
    // Load the first song information into the UI when running the app
    this.loadCurrentSong();

    // Render playlist
    this.render();

    // Hiển thị trạng thái ban đầu của button repeat & random
    // Display the initial state of the repeat & random button
    randomBtn.classList.toggle("active", this.isRandom);
    repeatBtn.classList.toggle("active", this.isRepeat);
  }
};

app.start();
