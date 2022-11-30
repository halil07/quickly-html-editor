import {useRef} from 'react';
import { GrapesjsReact } from 'grapesjs-react';
import 'grapesjs-preset-newsletter';

// imports required css for grapejs
import "grapesjs/dist/css/grapes.min.css";
import App from '../App';

function CoffeBreak() {
  const instance = useRef();
  return (
    <>
	<App />
    <div >
      <GrapesjsReact
        id='grapesjs-react'
        plugins={[
          'grapesjs-preset-newsletter-v2',
          'gjs-blocks-basic'
        ]}
        pluginsOpts={{
          "grapesjs-preset-newsletter": {
            inlineCss: true,
          }
        }}
        onInit={(editor) => {
          // Refs the instance of the editor
          instance.current = editor;
          editor.onReady(() => {

            // Sets editor components
            editor.setComponents(`
			
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
	<!--[if gte mso 9]>
	<xml>
		<o:OfficeDocumentSettings>
		<o:AllowPNG/>
		<o:PixelsPerInch>96</o:PixelsPerInch>
		</o:OfficeDocumentSettings>
	</xml>
	<![endif]-->
	<meta http-equiv="Content-type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="format-detection" content="date=no" />
	<meta name="format-detection" content="address=no" />
	<meta name="format-detection" content="telephone=no" />
	<meta name="x-apple-disable-message-reformatting" />
    <!--[if !mso]><!-->
	<link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700,700i" rel="stylesheet" />
    <!--<![endif]-->
	<title>Email Template</title>
	<!--[if gte mso 9]>
	<style type="text/css" media="all">
		sup { font-size: 100% !important; }
	</style>
	<![endif]-->
	

	<style type="text/css" media="screen">
		/* Linked Styles */
		body { padding:0 !important; margin:0 !important; display:block !important; min-width:100% !important; width:100% !important; background:#4b3832; -webkit-text-size-adjust:none }
		a { color:#e85853; text-decoration:none }
		p { padding:0 !important; margin:0 !important } 
		img { -ms-interpolation-mode: bicubic; /* Allow smoother rendering of resized image in Internet Explorer */ }
		.mcnPreviewText { display: none !important; }

				
		/* Mobile styles */
		@media only screen and (max-device-width: 480px), only screen and (max-width: 480px) {
			.mobile-shell { width: 100% !important; min-width: 100% !important; }

			.text-header,
			.m-center { text-align: center !important; }
			.holder { padding: 0 10px !important; }

			.text-nav { line-height: 28px !important; }

			.center { margin: 0 auto !important; }

			.td { width: 100% !important; min-width: 100% !important; }

			.text-header .link-white { text-shadow: 0 3px 4px rgba(0,0,0,09) !important; }

			.m-br-15 { height: 15px !important; }
			.bg { height: auto !important; } 

			.h0 { height: 0px !important; }

			.m-td,
			.m-hide { display: none !important; width: 0 !important; height: 0 !important; font-size: 0 !important; line-height: 0 !important; min-height: 0 !important; }

			.m-block { display: block !important; }

			.p30-15 { padding: 30px 15px !important; }
			.p15-15 { padding: 15px 15px !important; }
			.p30-0 { padding: 30px 0px !important; }
			.p0-0-30 { padding: 0px 0px 30px 0px !important; }
			.p0-15-30 { padding: 0px 15px 30px 15px !important; }
			.p0-15 { padding: 0px 15px 0px 15px !important; }
			.mp0 { padding: 0px !important; }
			.mp20-0-0 { padding: 20px 0px 0px 0px !important }
			.mp30 { padding-bottom: 30px !important; }
			.container { padding: 20px 0px !important; }
			.outer { padding: 0px !important }

			.fluid-img img { width: 100% !important; max-width: 100% !important; height: auto !important; }

			.column,
			.column-top,
			.column-dir,
			.column-empty,
			.column-empty2,
			.column-empty3,
			.column-bottom,
			.column-dir-top,
			.column-dir-bottom { float: left !important; width: 100% !important; display: block !important; }

			.column-empty { padding-bottom: 10px !important; }
			.column-empty2 { padding-bottom: 25px !important; }
			.column-empty3 { padding-bottom: 45px !important; }

			.content-spacing { width: 15px !important; }
			.content-spacing2 { width: 25px !important; }
		}
	</style>
</head>
<body class="body" style="padding:0 !important; margin:0 !important; display:block !important; min-width:100% !important; width:100% !important; background:#4b3832; -webkit-text-size-adjust:none;">
	<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#4b3832">
		<tr>
			<td align="center" valign="top"  style="padding: 40px 0px;" class="outer">
				<table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell">
					<tr>
						<td class="td" style="width:650px; min-width:650px; font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
							<table width="100%" border="0" cellspacing="0" cellpadding="0">
								<tr>
									<td>
										<!-- Header -->
										<table width="100%" border="0" cellspacing="0" cellpadding="0">
											<tr>
												<td >
													<table width="100%" border="0" cellspacing="0" cellpadding="0">
														<tr>
															<th class="column" width="208" bgcolor="#ffffff" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
																<table width="100%" border="0" cellspacing="0" cellpadding="0">
																	<tr>
																		<td class="img m-center" style="font-size:0pt; line-height:0pt; text-align:left;"><img src="images/t11_free_logo.jpg" width="208" height="80" border="0" alt="" /></td>
																	</tr>
																</table>
															</th>
															<th class="column-empty" bgcolor="#f7f0e7" width="1" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;"></th>
															<th class="column" bgcolor="#f7f0e7" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
																<table width="100%" border="0" cellspacing="0" cellpadding="0">
																	<tr>
																		<td class="text-header" style="padding: 15px 20px 15px 40px; color:#999999; font-family:Arial, sans-serif; font-size:12px; line-height:16px; text-align:right;"><multiline>No images? <a href="#" target="_blank" class="link2-u" style="color:#999999; text-decoration:underline;"><span class="link2-u" style="color:#999999; text-decoration:underline;">Open in your browser</span></a></multiline></td>
																	</tr>
																</table>
															</th>
														</tr>
													</table>
												</td>
											</tr>
										</table>
										<!-- END Header -->

										<!-- Navigation -->
										<table width="100%" border="0" cellspacing="0" cellpadding="0">
											<tr>
												<th class="column" bgcolor="#854442" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
													<table width="100%" border="0" cellspacing="0" cellpadding="0">
														<tr>
															<td class="text-nav" style="color:#ffffff; font-family:'Playfair Display', Georgia, serif; font-size:14px; line-height:18px; text-align:center; padding:15px 20px; text-transform:uppercase;">
																<multiline>
																	<a href="#" target="_blank" class="link-white" style="color:#ffffff; text-decoration:none;"><span class="link-white" style="color:#ffffff; text-decoration:none;">COFFEE</span></a>
																	&nbsp; &nbsp; &nbsp;
																	<a href="#" target="_blank" class="link-white" style="color:#ffffff; text-decoration:none;"><span class="link-white" style="color:#ffffff; text-decoration:none;">BEVERAGGES</span></a>
																	&nbsp; &nbsp; &nbsp;
																	<a href="#" target="_blank" class="link-white" style="color:#ffffff; text-decoration:none;"><span class="link-white" style="color:#ffffff; text-decoration:none;">BREAKFAST</span></a>
																	&nbsp; &nbsp; &nbsp;
																	<a href="#" target="_blank" class="link-white" style="color:#ffffff; text-decoration:none;"><span class="link-white" style="color:#ffffff; text-decoration:none;">LUNCH</span></a>
																	&nbsp; &nbsp; &nbsp;
																	<a href="#" target="_blank" class="link-white" style="color:#ffffff; text-decoration:none;"><span class="link-white" style="color:#ffffff; text-decoration:none;">DESSERTS</span></a>
																</multiline>
															</td>
														</tr>
													</table>
												</th>
												<th class="column" width="145" bgcolor="#e27651" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
													<table width="100%" border="0" cellspacing="0" cellpadding="0">
														<tr>
															<td class="text-nav" style="color:#ffffff; font-family:'Playfair Display', Georgia, serif; font-size:14px; line-height:18px; text-align:center; padding:15px 20px; text-transform:uppercase;">
																<multiline><a href="#" target="_blank" class="link-white" style="color:#ffffff; text-decoration:none;"><span class="link-white" style="color:#ffffff; text-decoration:none;">HAPPY HOUR</span></a></multiline>
															</td>
														</tr>
													</table>
												</th>
											</tr>
										</table>
										<!-- END Navigation -->
										
										<!-- Article / Image + Title + Text -->
										<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#e4d5c3">
											<tr>
												<td class="fluid-img" style="font-size:0pt; line-height:0pt; text-align:left;"><img src="images/t11_free_image1.jpg" width="650" height="365" border="0" alt="" /></td>
											</tr>
											<tr>
												<td class="p30-15" style="padding: 40px 40px;">
													<table width="100%" border="0" cellspacing="0" cellpadding="0">
														<tr>
															<td class="h2 pb15" style="color:#3c2f2f; font-family:'Playfair Display', Georgia, serif; font-size:35px; line-height:46px; text-align:left; padding-bottom:15px;"><multiline>New tastes ariving soon!</multiline></td>
														</tr>
														<tr>
															<td class="text pb20" style="color:#4b3832; font-family:Arial, sans-serif; font-size:15px; line-height:28px; text-align:left; padding-bottom:20px;"><multiline>Lorem ipsum dolor sit amet, consectetur  adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</multiline></td>
														</tr>
														<!-- Button -->
														<tr>
															<td align="left">
																<table border="0" cellspacing="0" cellpadding="0">
																	<tr>
																		<td class="text-button" style="background:#e27651; color:#ffffff; font-family:'Playfair Display', Georgia, serif; font-size:14px; line-height:18px; text-align:center; padding:14px 20px; text-transform:uppercase;"><multiline><a href="#" target="_blank" class="link-white" style="color:#ffffff; text-decoration:none;"><span class="link-white" style="color:#ffffff; text-decoration:none;">LEARN MORE</span></a></multiline></td>
																	</tr>
																</table>
															</td>
														</tr>
														<!-- END Button -->
													</table>
												</td>
											</tr>
										</table>
										<!-- END Article / Image + Title + Text -->

										<!-- Three Columns -->
										<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#f7f0e7">
											<tr>
												<td class="p30-15" style="padding: 50px 40px;" align="center">
													<table width="100%" border="0" cellspacing="0" cellpadding="0">
														<tr>
															<td class="h2 pb35" style="color:#3c2f2f; font-family:'Playfair Display', Georgia, serif; font-size:35px; line-height:46px; text-align:left; padding-bottom:35px;"><multiline>Coffee</multiline></td>
														</tr>
														<tr>
															<td>
																<table width="100%" border="0" cellspacing="0" cellpadding="0">
																	<tr>
																		<th class="column-top" width="176" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;">
																			<table width="100%" border="0" cellspacing="0" cellpadding="0">
																				<tr>
																					<td class="fluid-img pb15" style="font-size:0pt; line-height:0pt; text-align:left; padding-bottom:15px;"><img src="images/t11_free_image2.jpg" width="176" height="133" border="0" alt="" /></td>
																				</tr>
																				<tr>
																					<td class="h4 pb10" style="color:#000000; font-family:'Playfair Display', Georgia, serif; font-size:18px; line-height:24px; text-align:left; padding-bottom:10px;"><multiline>Lorem ipsum dolor sit amet</multiline></td>
																				</tr>
																				<tr>
																					<td class="text2 pb20" style="color:#999999; font-family:Arial, sans-serif; font-size:14px; line-height:28px; text-align:left; padding-bottom:20px;"><multiline>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</multiline></td>
																				</tr>
																				<!-- Button -->
																				<tr>
																					<td align="left">
																						<table border="0" cellspacing="0" cellpadding="0">
																							<tr>
																								<td class="text-button" style="background:#e27651; color:#ffffff; font-family:'Playfair Display', Georgia, serif; font-size:14px; line-height:18px; text-align:center; padding:14px 20px; text-transform:uppercase;"><multiline><a href="#" target="_blank" class="link-white" style="color:#ffffff; text-decoration:none;"><span class="link-white" style="color:#ffffff; text-decoration:none;">ORDER</span></a></multiline></td>
																							</tr>
																						</table>
																					</td>
																				</tr>
																				<!-- END Button -->
																			</table>
																		</th>
																		<th class="column-empty2" width="21" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;"></th>
																		<th class="column-top" width="176" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;">
																			<table width="100%" border="0" cellspacing="0" cellpadding="0">
																				<tr>
																					<td class="fluid-img pb15" style="font-size:0pt; line-height:0pt; text-align:left; padding-bottom:15px;"><img src="images/t11_free_image3.jpg" width="176" height="133" border="0" alt="" /></td>
																				</tr>
																				<tr>
																					<td class="h4 pb10" style="color:#000000; font-family:'Playfair Display', Georgia, serif; font-size:18px; line-height:24px; text-align:left; padding-bottom:10px;"><multiline>Lorem ipsum dolor sit amet</multiline></td>
																				</tr>
																				<tr>
																					<td class="text2 pb20" style="color:#999999; font-family:Arial, sans-serif; font-size:14px; line-height:28px; text-align:left; padding-bottom:20px;"><multiline>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</multiline></td>
																				</tr>
																				<!-- Button -->
																				<tr>
																					<td align="left">
																						<table border="0" cellspacing="0" cellpadding="0">
																							<tr>
																								<td class="text-button" style="background:#e27651; color:#ffffff; font-family:'Playfair Display', Georgia, serif; font-size:14px; line-height:18px; text-align:center; padding:14px 20px; text-transform:uppercase;"><multiline><a href="#" target="_blank" class="link-white" style="color:#ffffff; text-decoration:none;"><span class="link-white" style="color:#ffffff; text-decoration:none;">ORDER</span></a></multiline></td>
																							</tr>
																						</table>
																					</td>
																				</tr>
																				<!-- END Button -->
																			</table>
																		</th>
																		<th class="column-empty2" width="21" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;"></th>
																		<th class="column-top" width="176" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;">
																			<table width="100%" border="0" cellspacing="0" cellpadding="0">
																				<tr>
																					<td class="fluid-img pb15" style="font-size:0pt; line-height:0pt; text-align:left; padding-bottom:15px;"><img src="images/t11_free_image4.jpg" width="176" height="133" border="0" alt="" /></td>
																				</tr>
																				<tr>
																					<td class="h4 pb10" style="color:#000000; font-family:'Playfair Display', Georgia, serif; font-size:18px; line-height:24px; text-align:left; padding-bottom:10px;"><multiline>Lorem ipsum dolor sit amet</multiline></td>
																				</tr>
																				<tr>
																					<td class="text2 pb20" style="color:#999999; font-family:Arial, sans-serif; font-size:14px; line-height:28px; text-align:left; padding-bottom:20px;"><multiline>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</multiline></td>
																				</tr>
																				<!-- Button -->
																				<tr>
																					<td align="left">
																						<table border="0" cellspacing="0" cellpadding="0">
																							<tr>
																								<td class="text-button" style="background:#e27651; color:#ffffff; font-family:'Playfair Display', Georgia, serif; font-size:14px; line-height:18px; text-align:center; padding:14px 20px; text-transform:uppercase;"><multiline><a href="#" target="_blank" class="link-white" style="color:#ffffff; text-decoration:none;"><span class="link-white" style="color:#ffffff; text-decoration:none;">ORDER</span></a></multiline></td>
																							</tr>
																						</table>
																					</td>
																				</tr>
																				<!-- END Button -->
																			</table>
																		</th>
																	</tr>
																</table>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</table>
										<!-- END Three Columns -->

										<!-- Three Columns / Secondary -->
										<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#854442">
											<tr>
												<td class="p30-15" style="padding: 50px 40px;" align="center">
													<table width="100%" border="0" cellspacing="0" cellpadding="0">
														<tr>
															<td class="h2 beige pb35" style="font-family:'Playfair Display', Georgia, serif; font-size:35px; line-height:46px; text-align:left; color:#e4d5c3; padding-bottom:35px;"><multiline>Breakfast</multiline></td>
														</tr>
														<tr>
															<td>
																<table width="100%" border="0" cellspacing="0" cellpadding="0">
																	<tr>
																		<th class="column-top" width="176" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;">
																			<table width="100%" border="0" cellspacing="0" cellpadding="0">
																				<tr>
																					<td class="fluid-img pb15" style="font-size:0pt; line-height:0pt; text-align:left; padding-bottom:15px;"><img src="images/t11_free_image5.jpg" width="176" height="133" border="0" alt="" /></td>
																				</tr>
																				<tr>
																					<td class="h4 white pb10" style="font-family:'Playfair Display', Georgia, serif; font-size:18px; line-height:24px; text-align:left; color:#ffffff; padding-bottom:10px;"><multiline>Lorem ipsum dolor sit amet</multiline></td>
																				</tr>
																				<tr>
																					<td class="text2 beige pb20" style="font-family:Arial, sans-serif; font-size:14px; line-height:28px; text-align:left; color:#e4d5c3; padding-bottom:20px;"><multiline>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</multiline></td>
																				</tr>
																				<!-- Button -->
																				<tr>
																					<td align="left">
																						<table border="0" cellspacing="0" cellpadding="0">
																							<tr>
																								<td class="text-button" style="background:#e27651; color:#ffffff; font-family:'Playfair Display', Georgia, serif; font-size:14px; line-height:18px; text-align:center; padding:14px 20px; text-transform:uppercase;"><multiline><a href="#" target="_blank" class="link-white" style="color:#ffffff; text-decoration:none;"><span class="link-white" style="color:#ffffff; text-decoration:none;">ORDER</span></a></multiline></td>
																							</tr>
																						</table>
																					</td>
																				</tr>
																				<!-- END Button -->
																			</table>
																		</th>
																		<th class="column-empty2" width="21" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;"></th>
																		<th class="column-top" width="176" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;">
																			<table width="100%" border="0" cellspacing="0" cellpadding="0">
																				<tr>
																					<td class="fluid-img pb15" style="font-size:0pt; line-height:0pt; text-align:left; padding-bottom:15px;"><img src="images/t11_free_image6.jpg" width="176" height="133" border="0" alt="" /></td>
																				</tr>
																				<tr>
																					<td class="h4 white pb10" style="font-family:'Playfair Display', Georgia, serif; font-size:18px; line-height:24px; text-align:left; color:#ffffff; padding-bottom:10px;"><multiline>Lorem ipsum dolor sit amet</multiline></td>
																				</tr>
																				<tr>
																					<td class="text2 beige pb20" style="font-family:Arial, sans-serif; font-size:14px; line-height:28px; text-align:left; color:#e4d5c3; padding-bottom:20px;"><multiline>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</multiline></td>
																				</tr>
																				<!-- Button -->
																				<tr>
																					<td align="left">
																						<table border="0" cellspacing="0" cellpadding="0">
																							<tr>
																								<td class="text-button" style="background:#e27651; color:#ffffff; font-family:'Playfair Display', Georgia, serif; font-size:14px; line-height:18px; text-align:center; padding:14px 20px; text-transform:uppercase;"><multiline><a href="#" target="_blank" class="link-white" style="color:#ffffff; text-decoration:none;"><span class="link-white" style="color:#ffffff; text-decoration:none;">ORDER</span></a></multiline></td>
																							</tr>
																						</table>
																					</td>
																				</tr>
																				<!-- END Button -->
																			</table>
																		</th>
																		<th class="column-empty2" width="21" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;"></th>
																		<th class="column-top" width="176" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;">
																			<table width="100%" border="0" cellspacing="0" cellpadding="0">
																				<tr>
																					<td class="fluid-img pb15" style="font-size:0pt; line-height:0pt; text-align:left; padding-bottom:15px;"><img src="images/t11_free_image7.jpg" width="176" height="133" border="0" alt="" /></td>
																				</tr>
																				<tr>
																					<td class="h4 white pb10" style="font-family:'Playfair Display', Georgia, serif; font-size:18px; line-height:24px; text-align:left; color:#ffffff; padding-bottom:10px;"><multiline>Lorem ipsum dolor sit amet</multiline></td>
																				</tr>
																				<tr>
																					<td class="text2 beige pb20" style="font-family:Arial, sans-serif; font-size:14px; line-height:28px; text-align:left; color:#e4d5c3; padding-bottom:20px;"><multiline>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</multiline></td>
																				</tr>
																				<!-- Button -->
																				<tr>
																					<td align="left">
																						<table border="0" cellspacing="0" cellpadding="0">
																							<tr>
																								<td class="text-button" style="background:#e27651; color:#ffffff; font-family:'Playfair Display', Georgia, serif; font-size:14px; line-height:18px; text-align:center; padding:14px 20px; text-transform:uppercase;"><multiline><a href="#" target="_blank" class="link-white" style="color:#ffffff; text-decoration:none;"><span class="link-white" style="color:#ffffff; text-decoration:none;">ORDER</span></a></multiline></td>
																							</tr>
																						</table>
																					</td>
																				</tr>
																				<!-- END Button -->
																			</table>
																		</th>
																	</tr>
																</table>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</table>
										<!-- END Three Columns / Secondary -->

										<!-- Three Columns / Tertiary -->
										<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#f7f0e7">
											<tr>
												<td class="p30-15" style="padding: 50px 40px;" align="center">
													<table width="100%" border="0" cellspacing="0" cellpadding="0">
														<tr>
															<td class="h2 pb35" style="color:#3c2f2f; font-family:'Playfair Display', Georgia, serif; font-size:35px; line-height:46px; text-align:left; padding-bottom:35px;"><multiline>Lunch</multiline></td>
														</tr>
														<tr>
															<td>
																<table width="100%" border="0" cellspacing="0" cellpadding="0">
																	<tr>
																		<th class="column-top" width="176" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;">
																			<table width="100%" border="0" cellspacing="0" cellpadding="0">
																				<tr>
																					<td class="fluid-img pb15" style="font-size:0pt; line-height:0pt; text-align:left; padding-bottom:15px;"><img src="images/t11_free_image8.jpg" width="176" height="133" border="0" alt="" /></td>
																				</tr>
																				<tr>
																					<td class="h4 pb10" style="color:#000000; font-family:'Playfair Display', Georgia, serif; font-size:18px; line-height:24px; text-align:left; padding-bottom:10px;"><multiline>Lorem ipsum dolor sit amet</multiline></td>
																				</tr>
																				<tr>
																					<td class="text2 pb20" style="color:#999999; font-family:Arial, sans-serif; font-size:14px; line-height:28px; text-align:left; padding-bottom:20px;"><multiline>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</multiline></td>
																				</tr>
																				<!-- Button -->
																				<tr>
																					<td align="left">
																						<table border="0" cellspacing="0" cellpadding="0">
																							<tr>
																								<td class="text-button" style="background:#e27651; color:#ffffff; font-family:'Playfair Display', Georgia, serif; font-size:14px; line-height:18px; text-align:center; padding:14px 20px; text-transform:uppercase;"><multiline><a href="#" target="_blank" class="link-white" style="color:#ffffff; text-decoration:none;"><span class="link-white" style="color:#ffffff; text-decoration:none;">ORDER</span></a></multiline></td>
																							</tr>
																						</table>
																					</td>
																				</tr>
																				<!-- END Button -->
																			</table>
																		</th>
																		<th class="column-empty2" width="21" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;"></th>
																		<th class="column-top" width="176" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;">
																			<table width="100%" border="0" cellspacing="0" cellpadding="0">
																				<tr>
																					<td class="fluid-img pb15" style="font-size:0pt; line-height:0pt; text-align:left; padding-bottom:15px;"><img src="images/t11_free_image9.jpg" width="176" height="133" border="0" alt="" /></td>
																				</tr>
																				<tr>
																					<td class="h4 pb10" style="color:#000000; font-family:'Playfair Display', Georgia, serif; font-size:18px; line-height:24px; text-align:left; padding-bottom:10px;"><multiline>Lorem ipsum dolor sit amet</multiline></td>
																				</tr>
																				<tr>
																					<td class="text2 pb20" style="color:#999999; font-family:Arial, sans-serif; font-size:14px; line-height:28px; text-align:left; padding-bottom:20px;"><multiline>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</multiline></td>
																				</tr>
																				<!-- Button -->
																				<tr>
																					<td align="left">
																						<table border="0" cellspacing="0" cellpadding="0">
																							<tr>
																								<td class="text-button" style="background:#e27651; color:#ffffff; font-family:'Playfair Display', Georgia, serif; font-size:14px; line-height:18px; text-align:center; padding:14px 20px; text-transform:uppercase;"><multiline><a href="#" target="_blank" class="link-white" style="color:#ffffff; text-decoration:none;"><span class="link-white" style="color:#ffffff; text-decoration:none;">ORDER</span></a></multiline></td>
																							</tr>
																						</table>
																					</td>
																				</tr>
																				<!-- END Button -->
																			</table>
																		</th>
																		<th class="column-empty2" width="21" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;"></th>
																		<th class="column-top" width="176" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;">
																			<table width="100%" border="0" cellspacing="0" cellpadding="0">
																				<tr>
																					<td class="fluid-img pb15" style="font-size:0pt; line-height:0pt; text-align:left; padding-bottom:15px;"><img src="images/t11_free_image10.jpg" width="176" height="133" border="0" alt="" /></td>
																				</tr>
																				<tr>
																					<td class="h4 pb10" style="color:#000000; font-family:'Playfair Display', Georgia, serif; font-size:18px; line-height:24px; text-align:left; padding-bottom:10px;"><multiline>Lorem ipsum dolor sit amet</multiline></td>
																				</tr>
																				<tr>
																					<td class="text2 pb20" style="color:#999999; font-family:Arial, sans-serif; font-size:14px; line-height:28px; text-align:left; padding-bottom:20px;"><multiline>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</multiline></td>
																				</tr>
																				<!-- Button -->
																				<tr>
																					<td align="left">
																						<table border="0" cellspacing="0" cellpadding="0">
																							<tr>
																								<td class="text-button" style="background:#e27651; color:#ffffff; font-family:'Playfair Display', Georgia, serif; font-size:14px; line-height:18px; text-align:center; padding:14px 20px; text-transform:uppercase;"><multiline><a href="#" target="_blank" class="link-white" style="color:#ffffff; text-decoration:none;"><span class="link-white" style="color:#ffffff; text-decoration:none;">ORDER</span></a></multiline></td>
																							</tr>
																						</table>
																					</td>
																				</tr>
																				<!-- END Button -->
																			</table>
																		</th>
																	</tr>
																</table>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</table>
										<!-- END Three Columns / Tertiary -->

										<!-- Full-Width Image -->
										<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#f7f0e7">
											<tr>
												<td class="fluid-img" align="center" style="font-size:0pt; line-height:0pt; text-align:left;">
													<img src="images/t11_free_image11.jpg" width="650" height="140" border="0" alt="" />
												</td>
											</tr>
										</table>
										<!-- END Full-Width Image -->

										<!-- Article Image On The Left -->
										<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#e27651">
											<tr>
												<td>
													<table width="100%" border="0" cellspacing="0" cellpadding="0">
														<tr>
															<th class="column" width="325" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
																<table width="100%" border="0" cellspacing="0" cellpadding="0">
																	<tr>
																		<td class="fluid-img" style="font-size:0pt; line-height:0pt; text-align:left;"><img src="images/t11_free_image12.jpg" width="325" height="290" border="0" alt="" /></td>
																	</tr>
																</table>
															</th>
															<th class="column-empty" width="1" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;"></th>
															<th class="column" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
																<table width="100%" border="0" cellspacing="0" cellpadding="0">
																	<tr>
																		<td style="padding: 30px;" class="p30-15">
																			<table width="100%" border="0" cellspacing="0" cellpadding="0">
																				<tr>
																					<td class="h2 white pb30" style="font-family:'Playfair Display', Georgia, serif; font-size:35px; line-height:46px; text-align:left; color:#ffffff; padding-bottom:30px;"><multiline>Happy Hour!</multiline></td>
																				</tr>
																				<tr>
																					<td class="text2 white" style="font-family:Arial, sans-serif; font-size:14px; line-height:28px; text-align:left; color:#ffffff;"><multiline>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</multiline></td>
																				</tr>
																			</table>
																		</td>
																	</tr>
																</table>
															</th>
														</tr>
													</table>
												</td>
											</tr>
										</table>
										<!-- END Article Image On The Left -->

										<!-- Contact Us -->
										<table width="100%" border="0" cellspacing="0" cellpadding="0">
											<tr>
												<td class="p30-15" bgcolor="#e4d5c3" style="padding: 45px 40px;">
													<table width="100%" border="0" cellspacing="0" cellpadding="0">
														<tr>
															<td class="h2 pb15" style="color:#3c2f2f; font-family:'Playfair Display', Georgia, serif; font-size:35px; line-height:46px; text-align:left; padding-bottom:15px;"><multiline>Where to find us</multiline></td>
														</tr>
														<tr>
															<td class="text pb30" style="color:#4b3832; font-family:Arial, sans-serif; font-size:15px; line-height:28px; text-align:left; padding-bottom:30px;"><multiline>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</multiline></td>
														</tr>
														<tr>
															<td class="fluid-img pb40" style="font-size:0pt; line-height:0pt; text-align:left; padding-bottom:40px;"><img src="images/t11_free_image13.jpg" width="570" height="321" border="0" alt="" /></td>
														</tr>
														<tr>
															<td align="left">
																<table border="0" cellspacing="0" cellpadding="0">
																	<tr>
																		<th class="column-top" width="200" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;">
																			<table width="100%" border="0" cellspacing="0" cellpadding="0">
																				<tr>
																					<td class="h3 pb15" style="color:#3c2f2f; font-family:'Playfair Display', Georgia, serif; font-size:25px; line-height:35px; text-align:left; padding-bottom:15px;"><multiline>Address</multiline></td>
																				</tr>
																				<tr>
																					<td valign="top" class="text" style="color:#4b3832; font-family:Arial, sans-serif; font-size:15px; line-height:28px; text-align:left;"><multiline>East Pixel Bld. 99, <br />Creative City 9000 <br />Republic of Design</multiline></td>
																				</tr>
																			</table>
																		</th>
																		<th class="column-empty" width="20" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;"></th>
																		<th class="column-top" width="155" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;">
																			<table width="100%" border="0" cellspacing="0" cellpadding="0">
																				<tr>
																					<td class="h3 pb15" style="color:#3c2f2f; font-family:'Playfair Display', Georgia, serif; font-size:25px; line-height:35px; text-align:left; padding-bottom:15px;"><multiline>Phone</multiline></td>
																				</tr>
																				<tr>
																					<td valign="top" class="text2" style="color:#999999; font-family:Arial, sans-serif; font-size:14px; line-height:28px; text-align:left;"><multiline><a href="tel:+1234567890" target="_blank" class="link-brown" style="color:#4b3832; text-decoration:none;"><span class="link-brown" style="color:#4b3832; text-decoration:none;">(123) 456-7890</span></a></multiline></td>
																				</tr>
																			</table>
																		</th>
																		<th class="column-empty" width="20" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;"></th>
																		<th class="column-top" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;">
																			<table width="100%" border="0" cellspacing="0" cellpadding="0">
																				<tr>
																					<td class="h3 pb15" style="color:#3c2f2f; font-family:'Playfair Display', Georgia, serif; font-size:25px; line-height:35px; text-align:left; padding-bottom:15px;"><multiline>Email</multiline></td>
																				</tr>
																				<tr>
																					<td valign="top" class="text2" style="color:#999999; font-family:Arial, sans-serif; font-size:14px; line-height:28px; text-align:left;"><multiline><a href="email:your@email.com" target="_blank" class="link-brown" style="color:#4b3832; text-decoration:none;"><span class="link-brown" style="color:#4b3832; text-decoration:none;">your@email.com</span></a></multiline></td>
																				</tr>
																			</table>
																		</th>
																	</tr>
																</table>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</table>
										<!-- END Contact Us -->

										<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#854442">
											<tr>
												<td style="padding: 60px 50px 60px 50px;" class="p30-15">
													<table width="100%" border="0" cellspacing="0" cellpadding="0">
														<tr>
															<td class="pb30" align="center" style="padding-bottom:30px;">
																<table border="0" cellspacing="0" cellpadding="0">
																	<tr>
																		<td class="img" width="55" style="font-size:0pt; line-height:0pt; text-align:left;"><a href="#" target="_blank"><img src="images/t11_free_ico_facebook.jpg" width="34" height="34" border="0" alt="" /></a></td>
																		<td class="img" width="55" style="font-size:0pt; line-height:0pt; text-align:left;"><a href="#" target="_blank"><img src="images/t11_free_ico_twitter.jpg" width="34" height="34" border="0" alt="" /></a></td>
																		<td class="img" width="55" style="font-size:0pt; line-height:0pt; text-align:left;"><a href="#" target="_blank"><img src="images/t11_free_ico_instagram.jpg" width="34" height="34" border="0" alt="" /></a></td>
																		<td class="img" width="34" style="font-size:0pt; line-height:0pt; text-align:left;"><a href="#" target="_blank"><img src="images/t11_free_ico_linkedin.jpg" width="34" height="34" border="0" alt="" /></a></td>
																	</tr>
																</table>
															</td>
														</tr>
														<tr>
															<td class="text-footer pb10" style="color:#e4d5c3; font-family:Arial, sans-serif; font-size:14px; line-height:26px; text-align:center; padding-bottom:10px;"><multiline>Coffe Break - Free HTML Email Template</multiline></td>
														</tr>
														<tr>
															<td class="text-footer2 pb30" style="color:#e4d5c3; font-family:Arial, sans-serif; font-size:14px; line-height:26px; text-align:center; padding-bottom:30px;"><multiline>East Pixel Bld. 99, Creative City 9000, Republic of Design</multiline></td>
														</tr>
														<tr>
															<td class="text-footer3" style="color:#a3786f; font-family:Arial, sans-serif; font-size:12px; line-height:18px; text-align:center;"><multiline><a href="#" target="_blank" class="link3-u" style="color:#a3786f; text-decoration:underline;"><span class="link3-u" style="color:#a3786f; text-decoration:underline;">Unsubscribe</span></a> from this mailing list.</multiline></td>
														</tr>
													</table>
												</td>
											</tr>
										</table>
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
</body>
</html>

			`);
          });
        }}
      />
    </div>
    </>
  )
}

export default CoffeBreak
