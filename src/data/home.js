const HOME_DATA = {
   banner: {
      image: 'https://bsmart.edu.vn/assets/images/banner/banner.webp',
      title: 'Khởi đầu sự nghiệp của bạn',
      caption: 'Trở thành lập trình viên chuyên nghiệp tại BSMART',
      description:
         'Với đội ngũ Mentor có nhiều năm kinh nghiệm giảng dạy cùng các khóa học chất lượng. BSMART sẽ giúp các bạn có định hướng về nghề nghiệp và phát triển bản thân trên con đường trở thành lập trình viên chuyên nghiệp',
      linkCourse: '/course',
   },
   about: {
      title: 'Về chúng tôi',
      description:
         'BSMART được thành lập với mục tiêu trở thành nền tảng tin cậy về đào tạo lập trình viên, kết nối Mentor và Mentee. Với đội ngũ Mentor giàu kinh nghiệm và chuyên môn, BSMART cam kết mang đến các khóa học lập trình chất lượng nhất. Hệ thống khóa học đa dạng và linh hoạt, từ cơ bản đến nâng cao, giúp học viên có thể lựa chọn các khóa học phù hợp với nhu cầu và khả năng của mình. BSMART cập nhật và áp dụng những công nghệ mới, giúp học viên và Mentor được tiếp cận với những kiến thức và kỹ năng mới nhất trong lập trình. Bên cạnh đó, BSMART luôn đặt sự quan tâm, hỗ trợ học viên trong quá trình học tập và phát triển sự nghiệp sau khi tốt nghiệp.',
      overlayImage: 'https://bsmart.edu.vn/assets/images/background.webp',
      aboutImage: 'https://bsmart.edu.vn/files/banner-2.webp',
      linkCourse: '/course',
      linkFb: 'https://www.facebook.com/bsmart.edu.vn',
   },
   advantages: {
      title: 'Điểm ưu việt tại BSmart',
      items: [
         {
            title: 'Học theo lộ trình, có định hướng',
            content:
               'BSmart sẽ định hướng và đưa ra các lộ trình học lập trình nhằm phát triển năng lực và niềm đam mê lập trình của bạn để có việc ngay sau khi học.',
         },
         {
            title: 'Nền tảng cốt lõi trong lập trình',
            content:
               'BSmart cung cấp những nền tảng, giá trị tư duy cốt lõi nhất trong lập trình. Bạn sẽ tự tin trước sự thay đổi của công nghệ và môi trường làm việc.',
         },
         {
            title: 'Mài giũa bạn qua thực tế',
            content:
               'Đội ngũ Mentor là những người dày dặn kinh nghiệm qua các dự án thực tế tại các công ty lớn sẽ truyền đạt những kinh nghiệm "máu lửa" cho bạn.',
         },
         {
            title: 'Mentor tận tâm',
            content:
               'Bạn sẽ được giao dự án và Teamwork ngay từ ngày đầu tiên. Đóng vai trò một thành viên trong quy trình Scrum, Agile. Được Mentor hỗ trợ tận tâm, nhiệt tình.',
         },
         {
            title: 'Công nghệ mới, thực tế',
            content:
               'Bạn được học và trải nghiệm các công nghệ lập trình mới nhất, chuyên sâu, bám sát nhu cầu tuyển dụng thực tế từ doanh nghiệp.',
         },
         {
            title: 'Trao tay chìa khóa thành công',
            content:
               'Hướng dẫn viết CV, phỏng vấn. Kết nối, gặp gỡ, phỏng vấn cùng doanh nghiệp ngay sau khi tốt nghiệp.',
         },
      ],
   },
   courses: [
      {
         title: 'Khoá học tiêu biểu',
         items: [
            {
               link: '/course/coursedetail/net-core-api-230530010720',
               banner:
                  'https://bsmart.edu.vn/files/CourseImage/t-com_netcore_770px.png',
               mentorAvatar:
                  'https://bsmart.edu.vn/files/Avatar_Mentor/ezgif-1-860162a749.webp',
               name: '.NET Core API',
               mentor: 'Trần Hòa Hiệp',
               level: 'hard',
               students: 104,
               description:
                  '.NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng web API và microservices. Nó được thiết kế để hỗ trợ việc phát triển ứng dụng đa nền tảng, cho phép các nhà phát triển xây dựng ứng dụng trên nhiều nền tảng như Windows, macOS và Linux. Ứng dụng được phát triển bằng .NET Core API có thể hoạt động trên các nền tảng khác nhau một cách dễ dàng và không cần phải thực hiện các thủ tục phức tạp để chỉnh sửa mã nguồn.',
               price: 3000000,
               lessons: 15,
               star: 5,
            },
            {
               link: '/course/coursedetail/nhap-mon-kiem-thu-phan-mem-230616095137',
               banner: 'https://bsmart.edu.vn/files/testing%20foundation.jpg',
               mentorAvatar:
                  'https://bsmart.edu.vn/files/Avatar_Mentor/ezgif-1-9a0071b969.webp',
               name: 'Nhập Môn Kiểm Thử Phần Mềm',
               mentor: 'Tô Lý Hữu Nhân',
               level: 'medium',
               students: 22,
               description:
                  'Nhập Môn Kiểm Thử Phần Mềm sẽ cung cấp cho bạn kiến thức có thể áp dụng vào công việc kiểm thử. Như viết test case, system test hay hiểu rõ quy trình thực hiện kiểm thử một phần mềm nào đó. Khóa học sẽ hướng đến Manual Testing đồng thời cung cấp khái niệm về Automation Testing.',
               price: 2500000,
               lessons: 12,
               star: 4.5,
            },
            {
               link: '/course/coursedetail/java-web-230517100835',
               banner: 'https://bsmart.edu.vn/files/CourseImage/web-java.jpg',
               mentorAvatar:
                  'https://bsmart.edu.vn/files/Avatar_Mentor/my.webp',
               name: 'Java Web',
               mentor: 'Nguyễn Thị Trà My',
               level: 'medium',
               students: 15,
               description:
                  'Java là một ngôn ngữ dùng trong lập trình. Trong khi đó, web là từ viết tắt của website mà một website thì lại có thể chứa các trang web khác. Như vậy, Java Web được hiểu đơn giản là dùng ngôn ngữ lập trình Java, kết hợp với một số công nghệ khác như HTML, Javascript, CSS… nhằm tạo ra các website hoặc ứng dụng web.',
               price: 3000000,
               lessons: 18,
               star: 5,
            },
            {
               link: '/course/coursedetail/javascript-230428103307',
               banner:
                  'https://bsmart.edu.vn/files/CourseImage/java-script-SEO.jpg',
               mentorAvatar:
                  'https://bsmart.edu.vn/files/Avatar_Mentor/qqq.webp',
               name: 'JavaScript',
               mentor: 'Đỗ Minh Quân',
               level: 'medium',
               students: 18,
               description:
                  'JavaScript là ngôn ngữ lập trình phổ biến nhất trên thế giới trong suốt 20 năm qua. Nó cũng là một trong số 3 ngôn ngữ chính của lập trình web.',
               price: 2500000,
               lessons: 18,
               star: 5,
            },
            {
               link: '/course/coursedetail/software-requirement-230612075449',
               banner:
                  'https://bsmart.edu.vn/files/CourseImage/software-requirement-specification-1-638.webp',
               mentorAvatar:
                  'https://bsmart.edu.vn/files/Avatar_Mentor/ezgif-1-9a0071b969.webp',
               name: 'Software Requirement',
               mentor: 'Tô Lý Hữu Nhân',
               level: 'medium',
               students: 13,
               description:
                  'Môn software requirement là môn học trong lĩnh vực kỹ thuật phần mềm, đề cập đến quá trình tìm hiểu, phân tích, đánh giá và xác định yêu cầu của phần mềm để phát triển sản phẩm phần mềm hiệu quả. Môn học này cung cấp kiến thức và kỹ năng về phân tích yêu cầu của khách hàng, tạo ra thiết kế và đánh giá sự dễ sử dụng của sản phẩm phần mềm. Nó cũng giúp sinh viên hiểu sâu hơn về quy trình phát triển phần mềm, các phương pháp phân tích yêu cầu và công cụ phát triển phần mềm.',
               price: 2700000,
               lessons: 15,
               star: 5,
            },
            {
               link: '/course/coursedetail/software-requirement-for-beginner-230428103459',
               banner:
                  'https://bsmart.edu.vn/files/software-requirements-document-header%402x.png',
               mentorAvatar:
                  'https://bsmart.edu.vn/files/Avatar_Mentor/ezgif-1-95638d4605.webp',
               name: 'Software Requirement for Beginner',
               mentor: 'Hồ Hồng Minh',
               level: 'easy',
               students: 13,
               description:
                  'Môn Software Requirement là môn học trong lĩnh vực kỹ thuật phần mềm, đề cập đến quá trình tìm hiểu, phân tích, đánh giá và xác định yêu cầu của phần mềm để phát triển sản phẩm phần mềm hiệu quả. Môn học này cung cấp kiến thức và kỹ năng về phân tích yêu cầu của khách hàng, tạo ra thiết kế và đánh giá sự dễ sử dụng của sản phẩm phần mềm. Nó cũng giúp sinh viên hiểu sâu hơn về quy trình phát triển phần mềm, các phương pháp phân tích yêu cầu và công cụ phát triển phần mềm.',
               price: 2500000,
               lessons: 18,
               star: 4.5,
            },
            {
               link: '/course/coursedetail/c-fundamental-230509053424',
               banner: 'https://bsmart.edu.vn/files/download.png',
               mentorAvatar:
                  'https://bsmart.edu.vn/files/Avatar_Mentor/c8b543a9e0773c296566.webp',
               name: 'C Fundamental',
               mentor: 'Phan Nhật Tân',
               level: 'easy',
               students: 17,
               description:
                  'Môn học C++ là một môn học trong lĩnh vực Khoa học máy tính và Lập trình, trong đó sinh viên sẽ học cách sử dụng ngôn ngữ lập trình C++ để tạo ra các chương trình ứng dụng và phần mềm.',
               price: 2000000,
               lessons: 18,
               star: 5,
            },
            {
               link: '/course/coursedetail/database-fundamental-230623122618',
               banner:
                  'https://bsmart.edu.vn/files/CourseImage/ezgif-1-1b0fae0dff.webp',
               mentorAvatar:
                  'https://bsmart.edu.vn/files/Avatar_Mentor/bbb.webp',
               name: 'Database Fundamental',
               mentor: 'Đoàn Ngọc Trân Châu',
               level: 'medium',
               students: 17,
               description:
                  'Cơ sở dữ liệu (Database) là một hệ thống tổ chức và lưu trữ dữ liệu, cho phép người dùng truy cập và quản lý thông tin một cách hiệu quả. Môn học cơ sở dữ liệu (Database) được xem là một trong những môn học quan trọng trong lĩnh vực Công nghệ thông tin.',
               price: 2500000,
               lessons: 15,
               star: 5,
            },
         ],
      },
      {
         title: 'Khoá học cấp tốc',
         items: [
            {
               link: '/course/coursedetail/java-web-application-cap-toc-230511113427',
               banner: 'https://bsmart.edu.vn/files/CourseImage/PRJ301.webp',
               mentorAvatar:
                  'https://bsmart.edu.vn/files/Avatar_Mentor/c8b543a9e0773c296566.webp',
               name: 'Java Web Application_Cấp Tốc',
               mentor: 'Phan Nhật Tân',
               level: 'hot',
               students: 22,
               description:
                  'Khóa này sẽ giúp các bạn vượt qua kì thi một cách dễ dàng!',
               price: 500000,
               lessons: 3,
               star: 5,
            },
            {
               link: '/course/coursedetail/database-cap-toc-230626111514',
               banner: 'https://bsmart.edu.vn/files/CourseImage/DB_captoc.webp',
               mentorAvatar:
                  'https://bsmart.edu.vn/files/Avatar_Mentor/bbb.webp',
               name: 'Database_Cấp Tốc',
               mentor: 'Đoàn Ngọc Trân Châu',
               level: 'hot',
               students: 16,
               description:
                  'Giúp các bạn vượt qua kì thi môn Database một cách dễ dàng!',
               price: 500000,
               lessons: 2,
               star: 5,
            },
            {
               link: '/course/coursedetail/oop-cap-toc-230505081738',
               banner:
                  'https://bsmart.edu.vn/files/CourseImage/object-oriented-programming-oop.png',
               mentorAvatar:
                  'https://bsmart.edu.vn/files/Avatar_Mentor/c8b543a9e0773c296566.webp',
               name: 'OOP_Cấp Tốc',
               mentor: 'Phan Nhật Tân',
               level: 'hot',
               students: 18,
               description:
                  'Tự tin bước vào kì thi thực hành chỉ với 2 buổi học !',
               price: 500000,
               lessons: 2,
               star: 5,
            },
            {
               link: '/course/coursedetail/reactjs-cap-toc-230511104431',
               banner:
                  'https://bsmart.edu.vn/files/CourseImage/reactjs-nhung-dieu-ban-can-phai-biet-3.webp',
               mentorAvatar:
                  'https://bsmart.edu.vn/files/Avatar_Mentor/qqq.webp',
               name: 'ReactJS_Cấp Tốc',
               mentor: 'Đỗ Minh Quân',
               level: 'hot',
               students: 19,
               description:
                  'Tự tin lấy điểm cao thực hành chỉ với 2 buổi học cấp tốc ',
               price: 500000,
               lessons: 2,
               star: 5,
            },
            {
               link: '/course/coursedetail/software-requirement-cap-toc-230526121625',
               banner:
                  'https://bsmart.edu.vn/files/CourseImage/software-requirement-specification-1-638.webp',
               mentorAvatar:
                  'https://bsmart.edu.vn/files/Avatar_Mentor/ezgif-1-9a0071b969.webp',
               name: 'Software Requirement_Cấp Tốc',
               mentor: 'Tô Lý Hữu Nhân',
               level: 'hot',
               students: 40,
               description:
                  'Zero to Hero, khóa học cấp tốc này giúp các bạn sẽ dễ dàng hiểu và làm được bài thi thực hành chỉ với các thao tác đơn giản!',
               price: 500000,
               lessons: 3,
               star: 5,
            },
         ],
      },
   ],
   mentors: {
      title: 'Mentor tiêu biểu',
      items: [
         {
            mentorAvatar:
               'https://bsmart.edu.vn/files/Avatar_Mentor/c8b543a9e0773c296566.webp',
            link: 'https://bsmart.edu.vn/Mentor/Profile/tanpnse',
            mentor: 'Phan Nhật Tân',
            description:
               'Nhật Tân, với kinh nghiệm giảng dạy và chia sẻ cho nhiều học viên, tôi đã xây dựng được niềm tin rất lớn đối với cộng đồng. Hy vọng tôi sẽ đem đến cho các bạn những trải nghiệm đáng quý trong quá trình học tập cùng tôi.',
         },
         {
            mentorAvatar: 'https://bsmart.edu.vn/files/Avatar_Mentor/qqq.webp',
            link: 'https://bsmart.edu.vn/Mentor/Profile/quanne',
            mentor: 'Đỗ Minh Quân',
            description:
               'Tôi tên là Đỗ Minh Quân, tốt nghiệp ngành công nghệ thông tin, chuyên ngành công nghệ phần mềm. Tôi là một lập trình viên Front-end có hơn 3 năm kinh nghiệm trong việc phát triển giao diện cho các trang web và ứng dụng di động. Tôi đã từng tham gia các dự án với công nghệ HTML, CSS, JavaScript, React ... và từ đó tích lũy được nhiều kiến thức, kinh nghiệm trong lĩnh vực này. Tôi muốn chia sẻ kiến thức của mình cho những người mới bắt đầu, giúp họ có thể nhanh chóng tiếp cận và đạt được thành công trong lĩnh vực lập trình Front-end.',
         },
         {
            mentorAvatar: 'https://bsmart.edu.vn/files/Avatar_Mentor/stem.webp',
            link: 'https://bsmart.edu.vn/Mentor/Profile/stemmentor',
            mentor: 'Team STEM Mentor',
            description:
               'Xin chào mọi người, chúng tôi là giáo viên dạy STEM (khoa học, công nghệ, kỹ thuật và toán học). Chúng tôi đã có kinh nghiệm trong giảng dạy STEM trong nhiều năm và yêu thích công việc của mình. Chúng tôi rất hân hạnh được làm việc trong lĩnh vực này và hy vọng sẽ mang lại cho các em học viên những kiến thức và kỹ năng hữu ích và dẫn đến thành công trong tương lai.',
         },
         {
            mentorAvatar: 'https://bsmart.edu.vn/files/Avatar_Mentor/aa.webp',
            link: 'https://bsmart.edu.vn/Mentor/Profile/tuananh',
            mentor: 'Tuấn Anh Phạm',
            description:
               'Xin chào! Tôi là Phạm Tuấn Anh - một lập trình viên với đam mê mãnh liệt về công nghệ thông tin. Tôi đã làm việc trong ngành này trong một vài năm và có kinh nghiệm làm việc với các dự án phần mềm và phát triển ứng dụng. Tôi đã từng dẫn dắt nhiều học sinh, sinh viên từ zero đến hero trong lĩnh vực công nghệ thông tin. Tôi tin rằng công nghệ thông tin sẽ tiếp tục phát triển và luôn tìm cách để cập nhật tin tức mới nhất từ ngành.',
         },
         {
            mentorAvatar:
               'https://bsmart.edu.vn/files/Avatar_Mentor/ezgif-1-95638d4605.webp',
            link: 'https://bsmart.edu.vn/Mentor/Profile/minhne',
            mentor: 'Hồ Hồng Minh',
            description:
               'Xin chào, tôi là Hồ Hồng Minh. Tôi có hơn 3 năm kinh nghiệm trong việc giảng dạy và mentor cho các học sinh, sinh viên về chuyên ngành kĩ thuật phần mềm. Tôi đã hướng dẫn nhiều dự án và có thể giúp đỡ học sinh và sinh viên thành công trong việc đạt được các mục tiêu học tập và nghề nghiệp của họ. Ngoài ra, tôi cũng đam mê nghiên cứu và đăng ký các bài báo khoa học để chia sẻ các phát hiện và kiến thức mới với cộng đồng. Tôi tin rằng giáo dục là một công cụ mạnh mẽ để đẩy mạnh sự phát triển của cá nhân, cộng đồng, và tôi mong muốn hỗ trợ các học sinh và sinh viên trong việc đạt được sự thành công trong cuộc sống và nghề nghiệp của họ.',
         },
         {
            mentorAvatar: 'https://bsmart.edu.vn/files/Avatar_Mentor/bbb.webp',
            link: 'https://bsmart.edu.vn/Mentor/Profile/chaune',
            mentor: 'Đoàn Ngọc Trân Châu',
            description:
               'Tôi là Châu. Với mong muốn chia sẻ kiến thức của mình đến với những bạn yêu thích lập trình, tôi đã và đang hướng dẫn cho nhiều lớp học sinh và sinh viên. Với khả năng truyền đạt kiến thức một cách xúc tích và dễ hiểu nhất, tôi tin rằng tình yêu lập trình của các bạn sẽ ngày càng được nung nóng và ngày càng mãnh liệt hơn.',
         },
         {
            mentorAvatar:
               'https://bsmart.edu.vn/files/Avatar_Mentor/ezgif-1-9a0071b969.webp',
            link: 'https://bsmart.edu.vn/Mentor/Profile/nhanne',
            mentor: 'Tô Lý Hữu Nhân',
            description:
               'Tôi là Hữu Nhân, hiện tại là một Business Analyst với hơn 3 năm kinh nghiệm và 2 năm với vị trí Tester/QC. Tôi đã tham gia các dự án product tới outsource. Và từ những kinh nghiệm trầy da tróc vảy khi tham gia các dự án, tôi tin rằng tôi có thể chia sẻ các kinh nghiệm về quản lý dự án, quy trình làm phầm mềm, kiểm thử phần mềm và những kinh nghiệm xử lý vấn đề.',
         },
         {
            mentorAvatar:
               'https://bsmart.edu.vn/files/Avatar_Mentor/z4269915579822-aeabe623ca8078c8fcc4fdf2780c3869.webp',
            link: 'https://bsmart.edu.vn/Mentor/Profile/chaunguyen',
            mentor: 'Nguyễn Viết Châu',
            description:
               'Xin chào! Tôi là Nguyễn Viết Châu – mentor có kinh nghiệm trong việc giảng dạy các môn học liên quan đến công nghệ thông tin. Với 3 năm kinh nghiệm làm mentor và một nền tảng kiến thức chuyên môn vững vàng, tôi tự tin rằng mình có thể giúp các bạn sinh viên nắm vững kiến thức, nâng cao kỹ năng và đạt được thành tích tốt nhất trong học tập. Tôi luôn đặt sự tiếp thu và hiểu biết của sinh viên lên hàng đầu và dùng các phương pháp giảng dạy đa dạng, trực quan để giúp các bạn hiểu bài một cách dễ dàng và thú vị.',
         },
         {
            mentorAvatar: 'https://bsmart.edu.vn/files/Avatar_Mentor/my.webp',
            link: 'https://bsmart.edu.vn/Mentor/Profile/tramy',
            mentor: 'Nguyễn Thị Trà My',
            description:
               'Xin chào, tôi là Nguyễn Thị Trà My. Với kinh nghiệm làm mentor cũng như giảng dạy về các môn lập trình trong ngành công nghệ thông tin, tôi sẽ giúp các bạn hiểu rõ hơn về các môn học cũng như những kinh nghiệm thực hành. Tôi sẽ đồng hành cùng các bạn trong suốt quá trình học và định hướng nghề nghiệp trong tương lai.',
         },
         {
            mentorAvatar:
               'https://bsmart.edu.vn/files/Avatar_Mentor/ezgif-1-860162a749.webp',
            link: 'https://bsmart.edu.vn/Mentor/Profile/tranhoahiep',
            mentor: 'Trần Hòa Hiệp',
            description:
               'Tôi là Trần Hòa Hiệp, một full stack developer với 5 năm kinh nghiệm về công nghệ .NET có kiến ​​thức tốt về Thiết kế cơ sở dữ liệu, Design Pattern, Phân tích và thiết kế hướng đối tượng. 2 năm trong việc đào tạo học viên là người đi làm, và sinh viên sắp ra trường.',
         },
      ],
   },
   learning: {
      left: {
         image: 'https://bsmart.edu.vn/assets/images/banner/banner-3.webp',
         title: 'TRÁI NGÀNH',
         subTitle: 'From Zero to Hero',
      },
      right: {
         image: 'https://bsmart.edu.vn/assets/images/banner/banner-4.webp',
         title: 'ĐÃ BIẾT LẬP TRÌNH',
         subTitle: 'Đã có kiến thức tư duy lập trình và OOP',
      },
   },
   advantages2: {
      image: 'https://bsmart.edu.vn/assets/images/funfact_bg.webp',
      title: 'Định hướng và Chuẩn hoá lộ trình học tập',
      caption: 'Học Thật, Dự Án Thật, Mentor Tận Tâm',
      linkCourse: '/course',
      linkFb: 'https://www.facebook.com/bsmart.edu.vn',
   },
   logos: {
      title: 'Nhận được sự tin tưởng của các đối tác',
      items: [
         'https://bsmart.edu.vn/assets\\images\\logo-dai-hoc-01.webp',
         'https://bsmart.edu.vn/assets\\images\\logo-dai-hoc-02.webp',
         'https://bsmart.edu.vn/assets\\images\\logo-dai-hoc-03.webp',
         'https://bsmart.edu.vn/assets\\images\\logo-dai-hoc-04.webp',
         'https://bsmart.edu.vn/assets\\images\\logo-dai-hoc-05.webp',
         'https://bsmart.edu.vn/assets\\images\\logo-dai-hoc-06.webp',
         'https://bsmart.edu.vn/assets\\images\\logo-dai-hoc-07.webp',
         'https://bsmart.edu.vn/assets\\images\\logo-dai-hoc-01.webp',
      ],
   },
};
export default HOME_DATA;
